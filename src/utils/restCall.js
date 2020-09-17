import tools from './tools';
import _ from './lodash';
/* eslint-disable */

export default class RestCall {
  constructor(callBatch) {
    this.callBatch = callBatch;
    this.commands = [];
    this.result = {};
    this.errors = [];
    this.delay = 100;
    this.onSuccess = () => {};
    this.onError = () => {};
  }

  /**
   * Получаем значение total для запросов
   * @param arCommands
   * @param callback
   * @param callbackError
   */
  batch(arCommands, callback, callbackError = this.errorHandler) {
    let errorsCount = 0;
    this.onSuccess = callback;
    this.onError = callbackError;
    const arComs = {};

    _.each(arCommands, (command, key) => {
      arComs[key] = command;
      this.result[key] = {};
    });

    _.each(arCommands, (command) => {
      if (command.method === 'task.item.list') {
        let filter = {
          REAL_STATUS: [1, 2, 3, 4, 5, 6, 7],
        };

        if (!tools.isEmptyObject(command.params.filter)) {
          filter = command.params.filter;
        }

        let order = {
          ID: 'ASC',
        };

        if (!tools.isEmptyObject(command.params.order)) {
          order = command.params.order;
        }

        let select = ['*'];

        if (!tools.isEmptyObject(command.params.select)) {
          select = command.params.select;
        }

        let params = [
          order,
          filter,
          { NAV_PARAMS: { nPageSize: '50', iNumPage: '1'} },
          select,
        ];

        command = {
          params,
          method: 'task.item.list',
        };
      }
    });

    const batchCallback = (res) => {
      let allTotalLessFifty = true;

      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          if (res[key].error()) {
            this.errors[key] = res[key].error();
            errorsCount++;
          }

          if (res[key].total()) {
            if (res[key].total() > 50) {
              allTotalLessFifty = false;
            }
            this.result[key].data = [];
            this.result[key].total = res[key].total();

            if (res[key].data()) {
              const data = res[key].data();
              for (const a in data) {
                if (data.hasOwnProperty(a)) {
                  this.result[key].data.push(data[a]);
                }
              }
            }
            if (res[key].total() < 50) {
              delete arCommands[key];
            }
          } else if (isNaN(res[key].total()) || res[key].total() === null) {
            this.result[key].data = res[key].data();
          } else {
            this.result[key].total = 0;
          }
        }
      }

      if (errorsCount > 0) {
        this.onError(this.errors);
      } else {
        if (allTotalLessFifty) {
          this.onSuccess(this.result);
        } else {
          if (arCommands.length > 0) {
            setTimeout(this.callBatch.bind(null, arCommands, batchCallback), this.delay);
          } else {
            this.buildCommandsArray(arComs);
          }
        }
      }
    };

    this.callBatch(arCommands, batchCallback);
  }

  /**
   * Строим массив оптимизированных запросов
   * @param arCommands
   */
  buildCommandsArray(arCommands) {
    this.commands = [];
    for (const key in arCommands) {
      if (arCommands.hasOwnProperty(key)) {
        let item = arCommands[key];
        let itemTotal = this.result[key].total;
        let itemCount = Math.ceil(itemTotal / 50);

        if (itemTotal < 50) {
          itemCount--;
        }

        for (let i = 1; i < itemCount; i++) {
          let command = {};
          this.commands[key + '_' + i] = {};

          if (item.method === 'task.item.list') {
            let filter = {
              REAL_STATUS: [1, 2, 3, 4, 5, 6, 7],
            };

            if (!tools.isEmptyObject(item.params.filter)) {
              filter = item.params.filter;
            }

            let order = {
              ID: 'ASC',
            };

            if (!tools.isEmptyObject(item.params.order)) {
              order = item.params.order;
            }

            let select = ['*'];

            if (!tools.isEmptyObject(item.params.select)) {
              select = item.params.select;
            }

            let params = [
              order,
              filter,
              { NAV_PARAMS: { nPageSize: '50', iNumPage: i + 1 } },
              select,
            ];

            command[key + '_' + i] = {};
            command[key + '_' + i].params = [];
            command[key + '_' + i].method = item.method;
            command[key + '_' + i].params = params;
          } else {
            command[key + '_' + i] = {};
            command[key + '_' + i].method = item.method;
            command[key + '_' + i].params = {};
            command[key + '_' + i].params.order = item.params.order;
            command[key + '_' + i].params.select = item.params.select;
            command[key + '_' + i].params.start = i * 50;
          }

          if (item.params.hasOwnProperty('filter') && item.method !== 'task.item.list') {
            command[key + '_' + i].params.filter = item.params.filter;
          }
          if (item.params.hasOwnProperty('entity')) {
            command[key + '_' + i].params.entity = item.params.entity;
          }

          this.commands.push(command);
        }
      }
    }

    this.batchPacks();
  }

  /**
   * Вызов пакетов запросов
   */
  batchPacks() {
    const commands = this.buildCommands();

    let batchCallback = (response) => {
      _.each(response, (res, keys) => {
        const data = res.data();
        const key = keys.split('_')[0];

        _.each(data, (obj) => {
          this.result[key].data.push(obj);
        });
      });

      if (this.commands.length > 0) {
        const commands = this.buildCommands();
        setTimeout(this.callBatch.bind(null, commands, batchCallback), this.delay);
      } else {
        this.onSuccess(this.result);
      }
    };

    this.callBatch(commands, batchCallback);
  }

  /**
   * Строим пакет запросов
   * @returns {{}}
   */
  buildCommands() {
    const commandsPack = this.commands.splice(0, 50);
    const commands = {};

    _.each(commandsPack, (command) => {
      _.each(command, (obj, key) => commands[key] = obj);
    });

    return commands;
  }

  errorHandler(objErrors) {
    let errorString = 'Ошибки в методах: ';

    _.each(objErrors, (error, key) => {
      errorString += ` ${key}- ${error.ex.error_description}`;
    });

    console.log(errorString);
  }
}

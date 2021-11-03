import Vue from 'vue';
import Bitrix24 from './bitrix24-vue';
import Batch from './Batch';
import BitrixApi from './BitrixApi';

const initBitrix24 = new Promise((resolve) => {
  Bitrix24.init().then((BX24) => {
    BX24.init(() => {
      resolve(BX24);
    });
  });
});

export default ({ Middleware, requestList, handlerList }) => (
  initBitrix24.then((BX24) => {
    function callBatch() {
      const restCall = new Batch(BX24.callBatch, handlerList);
      return new Middleware(restCall, requestList);
    }

    const $BX24 = new BitrixApi(BX24, callBatch);
    const Bitrix = {
      install() {
        Vue.prototype.$BX24 = $BX24;
      },
    };

    Vue.use(Bitrix);

    return { Bitrix, $BX24 };
  })
);

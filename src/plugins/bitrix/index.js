import GlobalVue from 'vue';
import Bitrix24 from './bitrix24-vue';
import Batch from './Batch';

function initBitrix24({ BitrixMiddleware, requestList = {}, handlerList = {} }) {
  return new Promise((resolve, reject) => {
    Bitrix24.init().then((BX24) => {
      BX24.init(() => {
        const call = new Batch(BX24.callBatch, handlerList);
        const batch = call.batch.bind(call);

        resolve({
          BX24,
          get BitrixApi() {
            return new BitrixMiddleware(batch, requestList);
          },
        });
      });
    }).catch(reject);
  });
}

export default (bx24api) => (
  initBitrix24(bx24api).then(({ BX24, BitrixApi }) => {
    const Bitrix = {
      install(Vue) {
        Vue.prototype.$BX24 = BX24;
      },
    };

    GlobalVue.use(Bitrix);

    return { Bitrix, BX24, BitrixApi };
  })
);

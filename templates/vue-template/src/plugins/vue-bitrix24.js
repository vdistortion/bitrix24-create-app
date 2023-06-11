import {
  Bitrix24, BxButton, BxInput, BxLink,
} from 'vue-bitrix24';
import 'vue-bitrix24/css';

const useBitrix24 = {
  install(app) {
    [BxButton, BxInput, BxLink].forEach((Component) => {
      app.component(Component.name, Component);
    });
  },
};

export { Bitrix24, useBitrix24 };

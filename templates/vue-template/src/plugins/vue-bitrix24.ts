import type { App } from 'vue';
import Bitrix24 from 'bitrix24-library';
import BxButton from 'vue-bitrix24/BxButton';
import BxInput from 'vue-bitrix24/BxInput';

export { Bitrix24 };
export const useBitrix24 = {
  install(app: App) {
    [BxButton, BxInput].forEach((Component) => {
      app.component(Component.name, Component);
    });
  },
};

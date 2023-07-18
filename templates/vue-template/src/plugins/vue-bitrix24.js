import Bitrix24 from 'vue-bitrix24';
import BxButton from 'vue-bitrix24/BxButton';
import BxInput from 'vue-bitrix24/BxInput';
import BxLink from 'vue-bitrix24/BxLink';

export { Bitrix24 };
export const useBitrix24 = {
  install: (app) => Bitrix24.install(app, [BxButton, BxInput, BxLink]),
};

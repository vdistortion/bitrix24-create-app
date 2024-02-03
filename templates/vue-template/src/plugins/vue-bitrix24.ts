import Bitrix24 from 'bitrix24-library';
import usePlugin from 'vue-bitrix24/Plugin';
import BxButton from 'vue-bitrix24/BxButton';
import BxInput from 'vue-bitrix24/BxInput';

export { Bitrix24 };
export const useBitrix24 = {
  install: (app) => usePlugin.install(app, [BxButton, BxInput]),
};

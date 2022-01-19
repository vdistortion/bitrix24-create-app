import Vue from 'vue';
import {
  Bitrix24, BxButtonWrapper, BxButton, BxInput, BxLink,
} from 'vue-bitrix24';
import 'vue-bitrix24/dist/vue-bitrix24.css';

[BxButtonWrapper, BxButton, BxInput, BxLink].forEach((Component) => {
  Vue.component(Component.name, Component);
});

export default Bitrix24;

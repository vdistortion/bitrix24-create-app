import { serialize } from 'object-to-formdata';
import Ajax from './Ajax';

export default {
  test(data = {}) {
    return Ajax({
      url: 'index.php',
      method: 'post',
      params: serialize(data, {
        indices: true,
        nullsAsUndefineds: true,
        booleansAsIntegers: true,
        allowEmptyArrays: true,
      }),
    }).then(this.handler.bind(this));
  },

  handler([response]) {
    if (response.success) return response.data;
    throw new Error(response.message);
  },
};

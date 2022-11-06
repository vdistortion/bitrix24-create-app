import { Ajax } from './Ajax';

export default {
  test(data = {}) {
    return Ajax({
      url: 'index.php',
      method: 'post',
      params: data,
    }).then(this.handler);
  },

  handler(response) {
    if (response.success) return response.data;
    throw new Error(response.message);
  },
};

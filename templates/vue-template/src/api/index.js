import { Ajax } from './Ajax';

export default {
  test(FormData = {}) {
    return Ajax({
      url: 'index.php',
      method: 'post',
      data: FormData,
    }).then(this.handler);
  },

  handler(response) {
    if (response.success) return response.data;
    throw new Error(response.message);
  },
};

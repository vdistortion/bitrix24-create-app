import { Ajax, serializeRequest } from './Ajax';

export default {
  test(data = {}) {
    return Ajax({
      url: 'index.php',
      method: 'post',
      params: serializeRequest(data),
    }).then(this.handler.bind(this));
  },

  handler([response]) {
    if (response.success) return response.data;
    throw new Error(response.message);
  },
};

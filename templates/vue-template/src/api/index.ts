import { HttpClient } from './HttpClient';

export interface IUserPlaceholder {
  id: number;
  name: string;
  username: string;
  phone: string;
  email: string;
  website: string;
}

let users: IUserPlaceholder[] = [];

export default {
  post<T, R>(url: string, FormData = {}) {
    return HttpClient<T, R>({
      url,
      method: 'post',
      data: FormData,
    });
  },

  get<T, R>(url: string, params = {}) {
    return HttpClient<T, R>({
      url,
      method: 'get',
      params,
    });
  },

  async getUsers(limit: number) {
    if (users.length) return Promise.resolve(users);

    return this.get<IUserPlaceholder[], IUserPlaceholder[]>(
      'https://jsonplaceholder.typicode.com/users',
      {
        _limit: limit,
      },
    ).then((data) => {
      users = data;
      return data;
    });
  },
};

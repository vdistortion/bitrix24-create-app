import { v4 as uuid } from 'uuid';

export default {
  uuid,

  parseDate(date) {
    const [year, month, day] = date.split('-');
    return [month, day, year].join('/');
  },

  dateToString(date = Date.now()) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = (`0${newDate.getMonth() + 1}`).slice(-2);
    const day = (`0${newDate.getDate()}`).slice(-2);

    return [year, month, day].join('-');
  },

  getPrice(price) {
    return Number(price);
  },

  getDate(date = Date.now()) {
    return Number(new Date(date));
  },

  formatPrice(price, currency = 'RUB') {
    return new Intl.NumberFormat('ru', {
      currency,
      style: 'currency',
      minimumFractionDigits: 0,
    }).format(price);
  },

  formatDate(date = Date.now()) {
    return new Intl.DateTimeFormat('ru').format(new Date(date));
  },
};

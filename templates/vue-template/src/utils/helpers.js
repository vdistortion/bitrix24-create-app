import { v4 as uuid } from 'uuid';

export default {
  uuid,
  parseDate(date = Date.now()) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = (`0${newDate.getMonth() + 1}`).slice(-2);
    const day = (`0${newDate.getDate()}`).slice(-2);
    return [year, month, day].join('-');
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
  formatDeclension(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    const word = titles[(number % 100 > 4 && number % 100 < 20)
      ? 2
      : cases[(number % 10 < 5) ? number % 10 : 5]];
    return [number, word].join(' ');
  },
};

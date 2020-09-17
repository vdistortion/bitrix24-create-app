export default {
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },

  obj(...objects) {
    return Object.assign(Object.create(null), ...objects);
  },

  formatPrice(price, currency) {
    const { format } = new Intl.NumberFormat('ru', {
      style: 'currency',
      currency: currency || 'RUB',
      minimumFractionDigits: 0,
    });

    return format(price);
  },

  formatDate(date) {
    return date ? new Intl.DateTimeFormat('ru').format(new Date(date)) : '';
  },

  getDate(date) {
    return date ? +new Date(date) : null;
  },

  getPrice(price) {
    return price ? +price.split('.')[0] : 0;
  },

  currentDate(date = new Date()) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = (`0${newDate.getMonth() + 1}`).slice(-2);
    const day = (`0${newDate.getDate()}`).slice(-2);

    return [year, month, day].join('-');
  },
};

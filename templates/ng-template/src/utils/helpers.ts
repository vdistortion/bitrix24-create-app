export function env(key: string) {
  const value = import.meta.env[key];
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}

export function parseDate(date = Date.now()) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = `0${newDate.getMonth() + 1}`.slice(-2);
  const day = `0${newDate.getDate()}`.slice(-2);
  return [year, month, day].join('-');
}

export function formatPrice(price: number, currency = 'RUB') {
  return new Intl.NumberFormat('ru', {
    currency,
    style: 'currency',
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: string | number = Date.now()) {
  return new Intl.DateTimeFormat('ru').format(new Date(date));
}

export function formatDeclension(number: number, titles: string[]) {
  const cases = [2, 0, 1, 1, 1, 2];
  const word =
    titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  return [number, word].join(' ');
}

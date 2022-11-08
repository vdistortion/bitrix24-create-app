export default {
  get print() {
    return import.meta.env;
  },
  get(key) {
    const value = this.print[`VITE_${key}`];
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  },
};

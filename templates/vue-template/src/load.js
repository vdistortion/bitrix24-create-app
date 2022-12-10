['log', 'info', 'warn', 'error'].forEach((method) => {
  console[method] = console[method].bind(console, '%cVueApp', 'background-color: #ffffff;color: #000000;');
});

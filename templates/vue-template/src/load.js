['log', 'info', 'warn', 'error'].forEach((method) => {
  console[method] = console[method].bind(console, '%cVueApp', 'background-color: #ffffff;color: #000000;');
});

const script = document.createElement('script');
script.src = ['./constants.js', Math.random()].join('?');
document.head.append(script);

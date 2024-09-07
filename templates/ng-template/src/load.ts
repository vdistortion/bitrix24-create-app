type Method = 'log' | 'info' | 'warn' | 'error';

const methods: Method[] = ['log', 'info', 'warn', 'error'];

methods.forEach((method: Method) => {
  console[method] = console[method].bind(
    console,
    '%cBxApp',
    'background-color: #ffffff;color: #000000;',
  );
});

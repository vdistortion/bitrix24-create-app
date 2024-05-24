['log', 'info', 'warn', 'error'].forEach((method) => {
  (<any>window).console[method] = (<any>window).console[method].bind(
    window.console,
    '%cBxApp',
    'background-color: #ffffff;color: #000000;',
  );
});

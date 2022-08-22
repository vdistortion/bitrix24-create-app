const smartgrid = require('smart-grid');

smartgrid('./src/assets', {
  filename: 'smartgrid',
  outputStyle: 'styl',
  columns: 24,
  offset: '2%',
  mobileFirst: false,
  container: {
    maxWidth: '1920px',
    fields: '30px',
  },
  breakPoints: {
    w320: { /* Custom, iPhone Retina */
      width: '320px',
    },
    w480: { /* Extra Small Devices, Phones */
      width: '480px',
    },
    w768: { /* Small Devices, Tablets */
      width: '768px',
      fields: '20px', /* set fields only if you want to change container.fields */
    },
    w992: { /* Medium Devices, Desktops */
      width: '992px',
    },
    w1200: { /* Large Devices, Wide Screens */
      width: '1200px',
    },
    w1366: {
      width: '1366px',
    },
    w1600: {
      width: '1600px',
    },
  },
  mixinNames: {
    size: 'col-size',
  },
  tab: '  ',
});

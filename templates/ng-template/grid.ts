import grid from 'smart-grid';

grid('./src', {
  filename: '_grid',
  outputStyle: 'scss',
  columns: 24,
  offset: '2%',
  mobileFirst: false,
  container: {
    maxWidth: '1920px',
    fields: '30px',
  },
  breakPoints: {
    w320: {
      width: '320px' /* Custom, iPhone Retina */,
    },
    w480: {
      width: '480px' /* Extra Small Devices, Phones */,
    },
    w768: {
      width: '768px' /* Small Devices, Tablets */,
      fields: '20px' /* set fields only if you want to change container.fields */,
    },
    w992: {
      width: '992px' /* Medium Devices, Desktops */,
    },
    w1200: {
      width: '1200px' /* Large Devices, Wide Screens */,
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

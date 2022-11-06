export default {
  scope: ['crm', 'placement', 'user_brief'],
  placement: ['CRM_DEAL_DETAIL_TAB', 'CRM_ANALYTICS_MENU', 'REST_APP_URI'],
  testDomains: [],
  scripts: [],
  global: {
    appName: window.appName,
    appNameEng: window.appNameEng,
    appCodeName: window.appCodeName,
    appDirName: window.appDirName,
    archiveName: window.archiveName,
    isDev: window.isDev,
    isProd: window.isProd,
    isWatch: window.isWatch,
  },
  path: `${window.location.origin}/dev/${window.appDirName}/`,
  ajaxUrl: `/dev/${window.appDirName}/ajax/`,
  handler: [window.location.origin, window.location.pathname].join(''),
};

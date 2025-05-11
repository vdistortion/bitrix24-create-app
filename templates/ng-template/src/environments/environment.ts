import json from '../../package.json';

export const environment = {
  SCOPE: ['crm', 'placement', 'user_brief', 'task'],
  APP_NAME: json.name,
  PLACEMENT: ['REST_APP_URI', 'CRM_DEAL_DETAIL_TAB', 'CRM_ANALYTICS_MENU'],
  TEST_DOMAINS: [''],
};

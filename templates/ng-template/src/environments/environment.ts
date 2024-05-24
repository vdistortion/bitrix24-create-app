import json from '../../package.json';

export const environment = {
  SCOPE: ['crm', 'placement', 'user_brief'],
  APP_NAME: json.name,
  PLACEMENT: ['CRM_DEAL_DETAIL_TAB', 'CRM_ANALYTICS_MENU', 'REST_APP_URI'],
  TEST_DOMAINS: [],
};

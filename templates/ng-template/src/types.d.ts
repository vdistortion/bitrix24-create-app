declare module 'uuid';
declare module 'bitrix24-library';

interface IEnv {
  SCOPE: string[];
  APP_NAME: string;
  PLACEMENT: string[];
  TEST_DOMAINS: string[];
  PATH_HANDLER: string;
}

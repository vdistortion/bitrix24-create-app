/// <reference types="vite/client" />
declare module 'vue-bitrix24/*';
declare module 'bitrix24-library';
declare module '@jamescoyle/vue-icon';
declare module 'vue-select';
declare module 'window.console';

interface IUser {
  ID: string;
  NAME: string;
  EMAIL: string;
  ACTIVE: boolean;
  LAST_NAME: string;
  PERSONAL_BIRTHDAY: string;
  PERSONAL_PHOTO: string;
  WORK_POSITION: string;
  UF_DEPARTMENT: number[];
}

interface IUserNew {
  id: string;
  fullName: string;
  active: boolean;
  position: string;
  birthday: string | boolean;
  photo: string;
  department: number[];
  href: string;
  target: string;
}

interface IUsers {
  [key: string]: IUserNew;
}

interface IPlacementRaw {
  description: string;
  handler: string;
  placement: string;
  title: string;
}

interface IPlacement {
  placement: string;
  name: string;
  bind: boolean;
}

interface IPlacements {
  [key: string]: IPlacement;
}

type TMethod = string;
type TParams = {
  [key: string]: any;
};
type TRequestObject = {
  method: TMethod;
  params?: TParams;
};
type TRequestArray = [method: TMethod, params?: TParams];
type TRequest = TRequestObject | TRequestArray;
type TRequests = {
  [key: string]: TRequest;
};

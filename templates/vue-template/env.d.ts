/// <reference types="vite/client" />
declare module '@jamescoyle/vue-icon';
declare module 'vue-select';
declare module 'smart-grid';

interface IUserNew {
  id: string;
  fullName: string;
  active: boolean;
  position: string;
  birthday: string | boolean;
  photo: string;
  department: number[];
  href: string;
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

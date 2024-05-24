declare module 'uuid';
declare module 'bitrix24-library';

// users
type TUserType = 'users' | 'disabled';

interface IUserRaw {
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

interface IUser {
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
  [key: string]: IUser;
}

// placement
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

import { environment } from '../../environments/environment';
import tools from '../../utils/helpers';

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

interface IUsers {
  [key: string]: {
    fullName: string;
    active: boolean;
    position: string;
    birthday: string | boolean;
    photo: string;
    department: number[];
    href: string;
    target: string;
  };
}

interface IPlacement {
  description: string;
  handler: string;
  placement: string;
  title: string;
}

export interface IPlacements {
  [key: string]: {
    placement: string;
    name: string;
    bind: boolean;
  };
}

export default {
  user: parseId,
  users: parseUsers,
  department: parseIds,
  placementList: parsePlacementList,
};

function parseIds(users: IUser[]) {
  return users.map(parseId);
}

function parseId(user: IUser) {
  return user.ID;
}

function parseUsers(users: IUser[]) {
  return users.reduce((acc: IUsers, user) => {
    const { ID } = user;
    acc[ID] = parseUser(user);
    return acc;
  }, {});
}

function parseUser(user: IUser) {
  const {
    ID,
    NAME,
    EMAIL,
    ACTIVE,
    LAST_NAME,
    PERSONAL_BIRTHDAY,
    PERSONAL_PHOTO,
    WORK_POSITION,
    UF_DEPARTMENT,
  } = user;

  const fullName = [NAME, LAST_NAME].join(' ');

  return {
    fullName: fullName.trim() ? fullName : EMAIL,
    active: ACTIVE,
    position: WORK_POSITION,
    birthday: PERSONAL_BIRTHDAY ? tools.formatDate(PERSONAL_BIRTHDAY) : false,
    photo: PERSONAL_PHOTO,
    department: UF_DEPARTMENT,
    href: `/company/personal/user/${ID}/`,
    target: '_blank',
  };
}

function parsePlacementList(placementList: IPlacement[]) {
  function getItem(
    placement: string,
    name = environment.APP_NAME,
    bind = false,
  ) {
    return { placement, name, bind };
  }
  const defaultPlacement = environment.PLACEMENT.reduce(
    (acc: IPlacements, placement) => {
      acc[placement] = getItem(placement);
      return acc;
    },
    {},
  );
  const realPlacement = placementList.reduce((acc: IPlacements, item) => {
    acc[item.placement] = getItem(item.placement, item.title, true);
    return acc;
  }, {});

  return {
    ...defaultPlacement,
    ...realPlacement,
  };
}

import env from '@/env';
import tools from '@/utils/helpers';

interface IUser {
  ID: string;
  NAME: string;
  EMAIL: string;
  ACTIVE: boolean;
  LAST_NAME: string;
  PERSONAL_BIRTHDAY: string;
  PERSONAL_PHOTO?: string;
  WORK_POSITION?: string;
  UF_DEPARTMENT: number[];
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

function parseUsers(users: IUser[]): IUsers {
  return users.reduce((acc: IUsers, user: IUser) => {
    const { ID } = user;
    acc[ID] = parseUser(user);
    return acc;
  }, {});
}

function parseUser(user: IUser): IUserNew {
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
    id: ID,
    fullName: fullName.trim() ? fullName : EMAIL,
    active: ACTIVE,
    position: WORK_POSITION ?? '',
    birthday: PERSONAL_BIRTHDAY ? tools.formatDate(PERSONAL_BIRTHDAY) : false,
    photo: PERSONAL_PHOTO ?? '',
    department: UF_DEPARTMENT,
    href: `/company/personal/user/${ID}/`,
  };
}

function parsePlacementList(placementList: IPlacementRaw[]): IPlacements {
  function getItem(placement: string, name = env.get('APP_NAME'), bind = false) {
    return { placement, name, bind };
  }
  const defaultPlacement: IPlacements = env
    .get('PLACEMENT')
    .reduce((acc: IPlacements, placement: string) => {
      acc[placement] = getItem(placement);
      return acc;
    }, {});
  const realPlacement: IPlacements = placementList.reduce(
    (acc: IPlacements, item: IPlacementRaw) => {
      acc[item.placement] = getItem(item.placement, item.title, true);
      return acc;
    },
    {},
  );

  return {
    ...defaultPlacement,
    ...realPlacement,
  };
}

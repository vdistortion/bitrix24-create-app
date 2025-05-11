import { environment } from '../../environments/environment';
import { formatDate } from '../../utils/helpers';

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
  users: parseUsers,
  placementList: parsePlacementList,
};

function parseUsers(users: IUser[]): Record<string, IUserNew> {
  return users.reduce((acc: Record<string, IUserNew>, user) => {
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
    birthday: PERSONAL_BIRTHDAY ? formatDate(PERSONAL_BIRTHDAY) : false,
    photo: PERSONAL_PHOTO ?? '',
    department: UF_DEPARTMENT,
    href: `/company/personal/user/${ID}/`,
  };
}

function parsePlacementList(
  placementList: {
    description: string;
    handler: string;
    placement: string;
    title: string;
  }[],
): Record<string, IPlacement> {
  function getItem(placement: string, name = environment.APP_NAME, bind = false): IPlacement {
    return { placement, name, bind };
  }
  const defaultPlacement = environment.PLACEMENT.reduce(
    (acc: Record<string, IPlacement>, placement) => {
      acc[placement] = getItem(placement);
      return acc;
    },
    {},
  );
  const realPlacement = placementList.reduce((acc: Record<string, IPlacement>, item) => {
    acc[item.placement] = getItem(item.placement, item.title, true);
    return acc;
  }, {});

  return {
    ...defaultPlacement,
    ...realPlacement,
  };
}

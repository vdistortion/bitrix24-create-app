import { environment } from '../../environments/environment';
import tools from '../../utils/helpers';

export default {
  user: parseId,
  users: parseUsers,
  department: parseIds,
  placementList: parsePlacementList,
};

function parseIds(users: IUserRaw[]) {
  return users.map(parseId);
}

function parseId(user: IUserRaw) {
  return user.ID;
}

function parseUsers(users: IUserRaw[]): IUsers {
  return users.reduce((acc: IUsers, user: IUserRaw) => {
    const { ID } = user;
    acc[ID] = parseUser(user);
    return acc;
  }, {});
}

function parseUser(user: IUserRaw) {
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
    position: WORK_POSITION,
    birthday: PERSONAL_BIRTHDAY ? tools.formatDate(PERSONAL_BIRTHDAY) : false,
    photo: PERSONAL_PHOTO,
    department: UF_DEPARTMENT,
    href: `/company/personal/user/${ID}/`,
    target: '_blank',
  };
}

function parsePlacementList(placementList: IPlacementRaw[]): IPlacements {
  function getItem(
    placement: string,
    name = environment.APP_NAME,
    bind = false,
  ) {
    return { placement, name, bind };
  }
  const defaultPlacement: IPlacements = environment.PLACEMENT.reduce(
    (acc: IPlacements, placement: string) => {
      acc[placement] = getItem(placement);
      return acc;
    },
    {},
  );
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

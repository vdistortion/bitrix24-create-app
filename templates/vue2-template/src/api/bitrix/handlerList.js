import tools from '../../utils/helpers';
import config from '../../config';

export default {
  user: parseId,
  users: parseUsers,
  department: parseIds,
  placementList: parsePlacementList,
};

function parseIds(users) {
  return users.map(parseId);
}

function parseId(user) {
  return user.ID;
}

function parseUsers(users) {
  return users.reduce((list, user) => {
    const { ID, NAME } = user;
    if (NAME) list[ID] = parseUser(user);
    return list;
  }, {});
}

function parseUser(user) {
  const {
    ID,
    NAME,
    LAST_NAME,
    PERSONAL_BIRTHDAY,
    PERSONAL_PHOTO,
    WORK_POSITION,
  } = user;

  const fullName = [NAME, LAST_NAME].join(' ');

  return {
    fullName,
    position: WORK_POSITION,
    birthday: PERSONAL_BIRTHDAY ? tools.formatDate(PERSONAL_BIRTHDAY) : false,
    photo: PERSONAL_PHOTO,
    href: `/company/personal/user/${ID}/`,
    target: '_blank',
  };
}

function parsePlacementList(placementList) {
  function getItem(placement, name, bind = false) {
    return { placement, name: name || config.global.appName, bind };
  }
  const defaultPlacement = config.placement.reduce((acc, placement) => {
    acc[placement] = getItem(placement);
    return acc;
  }, {});
  const realPlacement = placementList.reduce((acc, item) => {
    acc[item.placement] = getItem(item.placement, item.title, true);
    return acc;
  }, {});

  return {
    ...defaultPlacement,
    ...realPlacement,
  };
}
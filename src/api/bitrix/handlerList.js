import tools from '@/utils/helpers';

export default {
  user: parseId,
  users: parseUsers,
  department: parseIds,
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

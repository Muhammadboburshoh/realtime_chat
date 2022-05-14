const users = [];

function userJoin(id, username, room) {
  const user = { id, username, room };
  users.push(user);
  return user;
}

function getCurrentUser(id) {
  return users.find(u => u.id === id);
}

function userLeave(id) {
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
}

function getRoomUsers(room) {
  return users.filter(u => u.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};

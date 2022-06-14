export const USER_NAME = 'USER_NAME';

export const userAction = (name, userImg) => ({
  type: 'USER_NAME',
  payload: {
    name,
    userImg,
  }
});
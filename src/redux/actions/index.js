export const USER_NAME = 'USER_NAME';

export const userAction = (name) => ({
  type: 'USER_NAME',
  payload: {
    name,
  }
});
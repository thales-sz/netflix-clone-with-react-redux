import { combineReducers } from 'redux';
import { USER_NAME } from '../actions';

const INITIAL_STATE = {
  user: 'CLONE-',
  userImg: 'https://i.pinimg.com/originals/0c/91/71/0c9171ce965fb4ec175c2b001516e754.png',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_NAME: return {
    ...state,
    user: action.payload.name,
    userImg: action.payload.userImg,
  };
  default:
    return state;
  }
};


const rootReducer = combineReducers({ reducer });

export default rootReducer;
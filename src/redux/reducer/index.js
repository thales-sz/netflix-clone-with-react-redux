import { combineReducers } from 'redux';
import { USER_NAME } from '../actions';

const INITIAL_STATE = {
  user: 'CLONE-',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_NAME: return {
    ...state,
    user: action.payload.name,
  };
  default:
    return state;
  }
};


const rootReducer = combineReducers({ reducer });

export default rootReducer;
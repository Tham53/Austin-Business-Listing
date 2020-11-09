import { combineReducers } from "redux";

const businesses = (state = [], action) => {
  switch (action.type) {
    case "ADD_BUSINESS":
      return [...state, action.value];
    case "DELETE_BUSINESS":
      const businesses = [...state];
      businesses.splice(action.value, 1);
      return businesses;
    default:
      return state;
  }
};

const user = (state = null, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ businesses, user });
import * as types from "./actionType(constants)";

const initialState = {
  users: [],
  user: {},
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case types.DELETE_USER:
    case types.ADD_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducers;

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
    case types.UPDATE_USER:
      return {
        ...state,
      };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducers;

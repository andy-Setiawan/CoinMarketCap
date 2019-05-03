import { SIGNIN, SIGNOUT } from "../types/ActionType";

const initialState = {
  username: "",
  password: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, username: action.username, password: action.password };
    case SIGNOUT:
      return { ...state };
    default:
      return { ...state };
  }
};

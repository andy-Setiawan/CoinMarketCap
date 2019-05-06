import { SIGNIN, SIGNOUT } from "../types/ActionType";

const initialState = {
  username: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, username: action.username };
    case SIGNOUT:
      return { ...state, username: "" };
    default:
      return { ...state };
  }
};

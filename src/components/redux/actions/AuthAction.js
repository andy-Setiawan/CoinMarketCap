import { SIGNIN, SIGNOUT } from "../types/ActionType";

export const User_SignIn = (username, password) => {
  return { type: SIGNIN, username: username, password: password };
};

export const User_SignOut = (username, password) => {
  return { type: SIGNOUT, username: username, password: password };
};

import { SIGNIN, SIGNOUT } from "../types/ActionType";
import AsyncStorage from "@react-native-community/async-storage";

export const User_SignIn = username => {
  AsyncStorage.setItem("LoginStatus", "true");
  AsyncStorage.setItem("Username", username);
  return { type: SIGNIN, username: username };
};

export const User_SignOut = () => {
  AsyncStorage.removeItem("LoginStatus");
  AsyncStorage.removeItem("Username");
  return { type: SIGNOUT };
};

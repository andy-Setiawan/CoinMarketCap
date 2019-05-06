import { GETCOIN, GETINFO, SETLOADING } from "../types/ActionType";

const initialState = {
  isLoading: true,
  info: "",
  sort:"coin",
  coin: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GETCOIN:
      return { ...state, coin: action.payload, sort:action.sort ,isLoading: false };
    case GETINFO:
      return { ...state, info: action.payload, isLoading: false };
    case SETLOADING:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

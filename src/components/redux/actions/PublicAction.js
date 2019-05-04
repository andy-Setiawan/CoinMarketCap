import { GETCOIN } from "../types/ActionType";
import axios from "axios";

const url = "https://pro-api.coinmarketcap.com";
const key = "ed3de216-cd5c-43ed-87e0-30d1264e1d3e";

export const Get_Coin = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/v1/cryptocurrency/listings/latest`,
      headers: {
        "X-CMC_PRO_API_KEY": key
      }
    })
      .then(response => {
        dispatch({ type: GETCOIN, payload: response.data.data });
      })
      .catch(error => console.log(error));
  };
};

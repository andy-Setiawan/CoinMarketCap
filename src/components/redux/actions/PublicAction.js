import { GETCOIN, GETINFO, SETLOADING } from "../types/ActionType";
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
        dispatch({ type: GETCOIN, payload: response.data.data, sort: "coin" });
      })
      .catch(error => console.log(error));
  };
};

export const Sort_Price = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/v1/cryptocurrency/listings/latest?sort=price`,
      headers: {
        "X-CMC_PRO_API_KEY": key
      }
    })
      .then(response => {
        dispatch({ type: GETCOIN, payload: response.data.data, sort: "price" });
      })
      .catch(error => console.log(error));
  };
};

export const Sort_Change = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/v1/cryptocurrency/listings/latest?sort=percent_change_24h`,
      headers: {
        "X-CMC_PRO_API_KEY": key
      }
    })
      .then(response => {
        dispatch({
          type: GETCOIN,
          payload: response.data.data,
          sort: "change"
        });
      })
      .catch(error => console.log(error));
  };
};

export const Sort_Volume = () => {
  return dispatch => {
    
    axios({
      method: "get",
      url: `${url}/v1/cryptocurrency/listings/latest?sort=volume_24h`,
      headers: {
        "X-CMC_PRO_API_KEY": key
      }
    })
      .then(response => {
        dispatch({
          type: GETCOIN,
          payload: response.data.data,
          sort: "volume"
        });
      })
      .catch(error => console.log(error));
  };
};

export const Sort_Name = () => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/v1/cryptocurrency/listings/latest?sort=name`,
      headers: {
        "X-CMC_PRO_API_KEY": key
      }
    })
      .then(response => {
        dispatch({ type: GETCOIN, payload: response.data.data, sort: "name" });
      })
      .catch(error => console.log(error));
  };
};
export const Get_Info = id => {
  return dispatch => {
    axios({
      method: "get",
      url: `${url}/v1/cryptocurrency/info?id=${id}`,
      headers: {
        "X-CMC_PRO_API_KEY": key
      }
    })
      .then(response => {
        dispatch({ type: GETINFO, payload: response.data.data[id] });
      })
      .catch(error => console.log(error));
  };
};

export const Set_Loading = () => {
  return { type: SETLOADING };
};

import axios from "axios";
import { LOGIN } from "./types";
import { REGISTER } from "./types";

export const login = userinfo => async dispatch => {
  const res = await axios.post("/auth/login", userinfo);
  dispatch({
    type: LOGIN,
    payload: res.data
  });
};

export const register = userinfo => async dispatch => {
  const res = await axios.post("/auth/register", userinfo);
  dispatch({
    type: REGISTER,
    payload: res.data
  });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: LOGIN,
    payload: res.data
  });
};

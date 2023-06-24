import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (uid) => {
  return async (dispatch) => {
    return await axios
      .get(`${process.env.REACT_APP_CLIENT_URL}api/user/${uid}`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log("erreur ", err));
  };
};

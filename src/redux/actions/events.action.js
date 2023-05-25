import axios from "axios";

export const GET_EVENTS = "GET_EVENTS";
export const NEW_EVENT = "NEW_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

export const getEvents = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}api/events/`
      );
      dispatch({ type: GET_EVENTS, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};
/*
export const getOneEvent = (hash) => {
  let id = get_id(hash);
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/events/` + id,
      });
      dispatch({ type: GET_ONE_EVENT, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};
*/
export const newEvent = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/events/create`,
        data: data,
        withCredentials: true,
      });
      dispatch({ type: NEW_EVENT, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

/*
export const updateEvent = (id, title, description) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/post/` + id,
        data: { title, description },
        withCredentials: true,
      });
      dispatch({ type: UPDATE_EVENT, payload: { title, description } });
    } catch (err) {
      console.log(err);
    }
  };
};
*/

export const deleteEvent = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}api/events/` + id,
        withCredentials: true,
      });
      dispatch({ type: DELETE_EVENT, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

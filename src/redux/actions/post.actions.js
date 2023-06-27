import axios from "axios";
import { get_id } from "../../assets/Utils";

export const GET_POSTS = "GET_POSTS";
export const GET_ONE_POST = "GET_ONE_POST";
export const NEW_POST = "NEW_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
/*
export const getPosts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}api/post/`);
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};
*/

export const getPosts = (categorie) => {
  console.log(process.env.REACT_APP_API_URL);
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/post/`,
        params: { categorie: categorie },
      });
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const getOnePost = (hash) => {
  let id = get_id(hash);
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}api/post/` + id,
      });
      dispatch({ type: GET_ONE_POST, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const newPost = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/post/create`,
        data: data,
        withCredentials: true,
        params: {
          token:  recupererCookie("token") // Ajoutez le cookie en tant que paramètre de requête
        }
      });
      dispatch({ type: NEW_POST, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const updatePost = (id, title, description, categorie, price) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/post/` + id,
        data: { title, description, price, categorie },
        withCredentials: true,
        params: {
          token:  recupererCookie("token") // Ajoutez le cookie en tant que paramètre de requête
        }
      });
      dispatch({ type: UPDATE_POST, payload: { title, description } });
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}api/post/` + id,
        withCredentials: true,
        params: {
          token:  recupererCookie("token") // Ajoutez le cookie en tant que paramètre de requête
        }
      });
      dispatch({ type: DELETE_POST, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };
};

function recupererCookie(nom) {
    nom = nom + "=";
    var liste = document.cookie.split(";");
    for (var i = 0; i < liste.length; i++) {
      var c = liste[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nom) === 0) return c.substring(nom.length, c.length);
    }
    return null;
  };

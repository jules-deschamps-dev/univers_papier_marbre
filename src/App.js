import React, { useEffect, useState } from "react";
import axios from "axios";
import Routes from "./Routes";
//import { useDispatch } from "react-redux";
//import { getUser } from "./redux/actions/user.actions";
import { UidContext } from "./components/AppContext";

const App = () => {
  const [uid, setUid] = useState(null); // where uid is UserID
  //const dispatch = useDispatch();
  function recupererCookie(nom) {
    nom = nom + "=";
    var liste = document.cookie.split(";");
    for (var i = 0; i < liste.length; i++) {
      var c = liste[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nom) === 0) return c.substring(nom.length, c.length);
    }
    return null;
  }
  let token = recupererCookie("token");
  console.log(token);

  useEffect(() => {
    const fetchToken = () => {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}token`,
        withCredentials: true,
        params: {
      token: token // Ajoutez le cookie en tant que paramètre de requête
    }
      })
        .then((res) => {
          setUid(res.data.id);
          console.log("uid ", res);
        })
        .catch((err) => console.log("No token", err));
    };

    fetchToken();
    //if (uid) dispatch(getUser(uid));
  });
  return (
    <>
      <UidContext.Provider value={uid}>
        <Routes />
      </UidContext.Provider>
    </>
  );
};

export default App;

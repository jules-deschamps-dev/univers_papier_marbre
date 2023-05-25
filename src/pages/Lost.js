import React from "react";

const Lost = () => {
  setTimeout(function () {
    document.location.href = "/";
  }, 1250);

  return (
    <div className="container-404">
      <h1 className="m-auto text-9xl"> 404 </h1>
      <h2> Page introuvable retour à l'accueil </h2>
    </div>
  );
};

export default Lost;

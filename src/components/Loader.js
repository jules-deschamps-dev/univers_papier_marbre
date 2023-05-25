import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-ring"></div>
      <div className="loader-ring"></div>
      <div className="loader-ring"></div>
      <span> Chargement...</span>
    </div>
  );
};

export default Loader;

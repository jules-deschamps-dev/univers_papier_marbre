import React from "react";
import { Link } from "react-router-dom";
import { nodeListToArray } from "../assets/Utils";

const Nav = () => {
  return (
    <nav>
      {document.location.href.includes("/product/") ? (
        <div className="ml-4 absolute" id="arrow-container">
          <a href={"/"} className="flex h-full w-20">
            <div className="little-arrow flex m-auto"></div>
          </a>
        </div>
      ) : null}

      <h1>
        <a href="/">L'Univers du Papier Marbre</a>
      </h1>

      <ul className="flex text-2xl py-2">
        <Link
          to="/"
          id="nav-collection"
          className="nav-element-list flex pr-4 hover:scale-110 transition-all w-fit text-center border-b-2 border-transparent"
        >
          Collections
        </Link>
        <Link
          to="/events"
          id="nav-events"
          className="nav-element-list flex pr-4 hover:scale-110 transition-all w-fit text-center border-b-2 border-transparent"
        >
          Événement
        </Link>
      </ul>
      <div className="flex h-full max-h-16 p-4 absolute right-0 translate-y-6 sm:translate-y-0">
        <a href="https://www.instagram.com/l.univers.du.papier.marbre/">
          <img
            src={`./img/icons/logo_instagram.png`}
            alt="instagram Géraldine Rey Deschamps"
            className="h-full m-auto max-h-12"
            id="logo-insta"
          />
        </a>
      </div>
    </nav>
  );
};

export default Nav;

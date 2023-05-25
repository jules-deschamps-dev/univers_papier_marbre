import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/post.actions";
import { isEmpty } from "../assets/Utils";
import Card from "./Card";
import Loader from "./Loader";

const Thread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);
  const [selectedCategorie, setSelectedCategorie] = useState("_");
  const categories = [
    {
      sqlName: "lampe",
      frontName: "Luminaires",
      img: "./img/lampe.jpg",
    },
    { sqlName: "carnet", frontName: "Carnets", img: "./img/carnet.jpg" },
    { sqlName: "deco", frontName: "Décoration", img: "./img/deco.jpg" },
    { sqlName: "papier", frontName: "Papiers", img: "./img/papier.jpg" },
  ];

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);

  return (
    <>
      <div className="flex flex-col my-8 w-4/5 mx-auto">
        <ul
          id="categorie-list"
          className="flex flex-row flex-wrap justify-evenly md:justify-between "
        >
          {categories.map((categorie) => (
            <li
              className="relative flex overflow-hidden w-2/5 md:w-1/5 my-2 aspect-square rounded-lg text-white items-center cursor-pointer"
              key={categorie.sqlName}
              id={categorie.sqlName}
              onClick={() => setSelectedCategorie(categorie.sqlName)}
            >
              <span className="absolute drop-shadow-2xl pt-2 sm:text-2xl font-bold w-full text-center">
                {categorie.frontName}
              </span>
              <img
                src={categorie.img}
                alt=""
                className="flex min-w-full min-h-full object-cover"
              />
            </li>
          ))}
        </ul>{" "}
        <div
          className="flex mt-8 h-max border-solid border-black border-2 rounded-3xl justify-center text-white cursor-pointer"
          id="print-all-article-button"
          onClick={() => setSelectedCategorie("_")}
        >
          <span className="m-auto flex drop-shadow-2xl py-1 text-xl font-bold">
            Tout afficher
          </span>
        </div>
      </div>
      {loadPost ? (
        <div id="loader-bloc">
          <Loader />
        </div>
      ) : (
        <ul className="flex flex-row flex-wrap m-auto pl-10 pr-10 pb-20">
          {!isEmpty(posts[0]) &&
            posts
              .filter((element) =>
                element.categorie.includes(selectedCategorie)
              )
              .slice(0)
              .reverse()
              .map((post) => {
                return (
                  <li
                    key={post.id}
                    className="lg:w-1/3 md:w-1/2 sm:h-500 p-5 m-auto"
                  >
                    <Card card={post} />
                  </li>
                );
              })}
        </ul>
      )}
    </>
  );
};

export default Thread;

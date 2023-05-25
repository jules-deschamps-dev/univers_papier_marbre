import React, { useContext, useState } from "react";
import { UidContext } from "./AppContext";
import { useDispatch } from "react-redux";
import { reload } from "../assets/Utils";
import { deletePost, getPosts, updatePost } from "../redux/actions/post.actions";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const uid = useContext(UidContext);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const [price, setPrice] = useState(card.description);
  const [categorie, setCategorie] = useState(card.categorie);
  const [path, setPath] = useState("/product/?id=" + card.id);

  const handleDelete = () => {
    dispatch(deletePost(card.id));
    dispatch(getPosts);
    window.location.reload();
  };

  const showUpdate = () => {
    setPath("");
    setUpdate(true);
    document.getElementById("thumb-text-container" + card.id).style.backgroundColor = "rgba(255, 255, 255, .9)";
    document.getElementById("thumb-text-container" + card.id).style.transform = "perspective(1000px) rotateX(0deg)";
    document.getElementById("thumb-text-container" + card.id).style.border = "dotted 6px darkred";
    document.getElementById("thumb-text-container" + card.id).style.borderRadius = "20px";
  };

  const handleUpdate = () => {
    dispatch(updatePost(card.id, title, description, price));
    dispatch(getPosts);
    window.location.reload();
  };

  const cancelUpdate = () => {
    reload();
    setUpdate(false);
  };

  return (
    <>
      {uid ? (
        <div className="relative">
          <div className="crud-post">
            <img src="./img/icons/pen-circle.svg" alt="" onClick={showUpdate} />
            <img src="./img/icons/circle-trash.svg" alt="" onClick={handleDelete} />
          </div>
        </div>
      ) : null}

      <Link to={path} className="card" product={card}>
        <div id={"card" + card.id} className="card-content">
          <div className="flex thumb-img-container h-full m-auto justify-center">
            <div id={"thumb-text-container" + card.id} className="thumb-text-container">
              {update ? (
                <>
                  <div className="h-5/6">
                    <input name="title" defaultValue={card.title} onChange={(e) => setTitle(e.target.value)} className="w-full m-1"></input>
                    <textarea
                      name="description"
                      className="w-full h-1/2 m-1"
                      defaultValue={card.description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <input
                      type="number"
                      name="price"
                      defaultValue={card.price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-fit m-1"
                    ></input>
                    <select
                      name="categorie"
                      id="categorie"
                      placeholder="Description"
                      onChange={(e) => setCategorie("_" + e.target.value)}
                      value={categorie}
                      type="number"
                      className="w-fit m-auto"
                    >
                      <option value="lampe">Luminaires</option>
                      <option value="carnet">Carnet</option>
                      <option value="paint">Peinture</option>
                    </select>
                  </div>
                  <div className="flex flex-row">
                    <img src="./img/icons/circle-xmark.svg" alt="" className="flex m-auto w-8" onClick={cancelUpdate} />
                    <img src="./img/icons/circle-check.svg" alt="" className="flex m-auto w-8" onClick={handleUpdate} />
                  </div>
                </>
              ) : (
                <>
                  <h2>{card.title}</h2>
                  <p className="description">{card.description}</p>
                </>
              )}
            </div>
            <img id={card.id} src={card.picture} alt="papier marbré artisanat" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;

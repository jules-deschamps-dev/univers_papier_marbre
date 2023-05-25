import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts, newPost } from "../redux/actions/post.actions";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categorie, setCategorie] = useState("");
  const [picture] = useState(null);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handlePost = async () => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("price", price);
    data.append("categorie", categorie);
    if (file) data.append("file", file);
    if (file) data.append("picture", picture);

    await dispatch(newPost(data));
    await dispatch(getPosts());
    console.log("send new post");
    window.location.reload();
  };

  const handlePicture = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    const data = new FormData();
    data.append("file", file);
    data.append("picture", picture);
  };

  function handleSelect() {
    let select = document.getElementById("categorie");
    let choices = select.selectedIndex;
    let value = select.options[choices].value;
    setCategorie(value);
  }

  return (
    <div className="white-layer">
      <div className="new-post-container">
        <div className="flex flex-col m-auto w-5/6 h-5/6">
          <div className="flex flex-col mb-4">
            <input
              name="title"
              id="tile"
              placeholder="Titre"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="h-10"
            ></input>
          </div>

          <div className="flex flex-col mb-4">
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="h-28"
            ></textarea>
          </div>

          <div className="flex flex-col sm:flex-row justify-center text-center">
            <div className="flex flex-col w-full h-16">
              <select
                name="categorie"
                id="categorie"
                value={categorie}
                className="w-full m-auto"
                onChange={() => handleSelect()}
              >
                <option value="" disabled className="text-slate">
                  Catégorie
                </option>
                <option value="_lampe" id="lampe">
                  Luminaires
                </option>
                <option value="_carnet" id="carnet">
                  Carnet
                </option>
                <option value="_deco" id="deco">
                  Décoration
                </option>
                <option value="_papier" id="papier">
                  Papier
                </option>
              </select>
            </div>

            <div className="flex flex-col w-full h-16">
              <input
                name="price"
                id="price"
                placeholder="€"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number"
                className="w-16 h-8 m-auto"
              ></input>
            </div>

            <div className="flex w-full justify-center h-16">
              <img
                src="../img/icons/hexagon-image.svg"
                alt=""
                className="w-16 h-16 m-auto absolute m-auto flex"
              />
              <input
                type="file"
                id="file-upload"
                name="file"
                accept=".jpg, .jpeg, .png"
                className="w-16 h-16 m-auto absolute flex"
                onChange={(e) => handlePicture(e)}
              />
            </div>
          </div>
        </div>

        <div className="btn-send flex flex-col">
          {title && description && categorie && file && price ? (
            <>
              <button className="send w-10 m-auto" onClick={handlePost}>
                <img src="./img/icons/circle-check.svg" alt="" />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

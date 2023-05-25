import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getEvents, newEvent } from "../redux/actions/events.action";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [place, setPlace] = useState("");
  const [placeLink, setPlaceLink] = useState("");
  const [city, setCity] = useState("");
  const [picture] = useState(null);
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handlePost = async () => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("city", city);
    data.append("place", place);
    data.append("placeLink", placeLink);
    data.append("link", link);
    data.append("begin", begin);
    data.append("end", end);
    if (file) data.append("file", file);
    if (file) data.append("picture", picture);

    await dispatch(newEvent(data));
    await dispatch(getEvents());
    console.log("ici");
    window.location.reload();
  };

  const handlePicture = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    const data = new FormData();
    data.append("file", file);
    data.append("picture", picture);
  };

  return (
    <div className="white-layer">
      <div className="new-post-container">
        <input
          name="title"
          id="tile"
          placeholder="Titre"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="h-10"
        ></input>

        <input
          name="description"
          id="description"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="h-10"
        ></input>

        <input
          name="city"
          id="city"
          placeholder="Ville"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          className="h-10"
        ></input>

        <input
          name="place"
          id="place"
          placeholder="Adresse"
          onChange={(e) => setPlace(e.target.value)}
          value={place}
          className="h-10"
        ></input>

        <input
          name="placeLink"
          id="placeLink"
          placeholder="Lien vers l'adresse"
          onChange={(e) => setPlaceLink(e.target.value)}
          value={placeLink}
          className="h-10"
        ></input>

        <input
          id="link"
          name="link"
          className="h-10"
          placeholder="Lien"
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />

        <div className="flex flex-row justify-evenly">
          <div>
            <label htmlFor="begin">Début : </label>
            <input
              type="date"
              name="begin"
              id="begin"
              onChange={(e) => setBegin(e.target.value)}
              value={begin}
              className="h-10"
            ></input>
          </div>
          <div>
            <label htmlFor="end">Fin : </label>
            <input
              type="date"
              name="end"
              id="end"
              onChange={(e) => setEnd(e.target.value)}
              value={end}
              className="h-10"
            ></input>
          </div>
        </div>
        <div className="flex h-16">
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
            className="w-16 h-16 m-auto absolute flex invisible"
            onChange={(e) => handlePicture(e)}
          />
        </div>

        <div className="btn-send flex flex-col">
          {title ? (
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

export default CreateEvent;

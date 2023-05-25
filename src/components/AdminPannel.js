import React, { useState } from "react";
import Logout from "../pages/Logout";
import CreateEvent from "./CreateEvent";
import CreatePost from "./CreatePost";

const AdminPannel = () => {
  const [createPost, setCreatePost] = useState(false);

  const showPostCreator = () => {
    if (createPost === false) setCreatePost(true);
    else setCreatePost(false);
  };

  return (
    <div className="admin-pannel-container z-10">
      <aside className="admin-pannel">
        {!createPost ? (
          <>
            <img
              src={`./img/icons/circle-plus.svg`}
              alt=""
              className="m-auto flex"
              onClick={showPostCreator}
            />
            <Logout />
          </>
        ) : (
          <img
            src={`./img/icons/xmark.svg`}
            alt=""
            className="m-auto flex"
            onClick={showPostCreator}
          />
        )}
      </aside>

      {createPost && document.location.href.includes("/") ? (
        <CreatePost />
      ) : null}

      {createPost && document.location.href.includes("/events") ? (
        <CreateEvent />
      ) : null}
    </div>
  );
};

export default AdminPannel;

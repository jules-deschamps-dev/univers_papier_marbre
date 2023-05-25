import React, { useContext } from "react";
import AdminPannel from "../components/AdminPannel";
import { UidContext } from "../components/AppContext";
import Thread from "../components/Thread";
import Nav from "../components/Nav";

const Home = () => {
  const uid = useContext(UidContext);
  return (
    <>
      {uid ? <AdminPannel /> : null}
      <Nav />
      <p className="pt-10 pb-5 px-4 sm:w-full md:w-5/6 m-auto text-justify h-fit">
        Géraldine Rey-Deschamps, relieur de profession depuis 1990. Elle a eu
        envie de créer ses propres papiers marbrés à la cuve main, dans un
        premier temps pour ses reliures. Ensuite l’idée fut de les moderniser en
        les rendant plus artistiques et les utiliser pour des abat-jour, objets
        décoratifs, cartonnages et toujours pour les reliures de carnets avec
        des crayons assortis.
      </p>
      <div id="thread" className="lg:w-11/12 xl:w-10/12 2xl:w-9/12 m-auto">
        <Thread />
      </div>
    </>
  );
};

export default Home;

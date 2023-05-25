import React from "react";
import Nav from "../components/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <p className="pt-10 pb-5 pl-10 pr-10 text-justify h-fit">
        Géraldine Rey-Deschamps, relieur de profession depuis 1990. Elle a eu
        envie de créer ses propres papiers marbrés à la cuve main, dans un
        premier temps pour ses reliures. Ensuite l’idée fut de les moderniser en
        les rendant plus artistiques et les utiliser pour des abat-jour, objets
        décoratifs, cartonnages et toujours pour les reliures de carnets avec
        des crayons assortis.
      </p>
      <section id="aboutPage">
        <article>
          <div className="test">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod omnis
            sit architecto dignissimos enim necessitatibus consequatur, nulla
            excepturi! Magni fugiat eum suscipit fugit vel assumenda quia, at
            quos? Repellendus, animi.
          </div>
          <div>
            <img src="./img/about_1.jpg" alt="confection papier marbré" />
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            veritatis saepe nisi soluta minima consequatur asperiores
            exercitationem nihil.
          </div>
        </article>

        <article>
          <div className="test">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod omnis
            sit architecto dignissimos enim necessitatibus consequatur, nulla
            excepturi! Magni fugiat eum suscipit fugit vel assumenda quia, at
            quos? Repellendus, animi.
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            veritatis saepe nisi soluta minima consequatur asperiores
            exercitationem nihil.
          </div>
          <div>
            <img src="./img/about_2.jpg" alt="confection papier marbré" />
          </div>
        </article>

        <article>
          <div className="test">
            <img src="./img/about_3.jpg" alt="confection papier marbré" />
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            veritatis saepe nisi soluta minima consequatur asperiores
            exercitationem nihil.
          </div>
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            veritatis saepe nisi soluta minima consequatur asperiores
            exercitationem nihil.
          </div>
        </article>
      </section>
    </>
  );
};

export default About;

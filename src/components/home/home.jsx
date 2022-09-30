// import { useState } from "react";

import Header from "../header";
import BgSlider from "../BgSlider";
import OutlinedButton from "../OutLinedBtn";
import "./home.scss";

const images = [
  "https://www.peru.travel/Contenido/Experiencia/Imagen/en/79/1.1/Sighting%20of%20flora%20and%20fauna%20in%20the%20PN%20Manu.jpg",
  "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/paracas.jpg",
  "https://media.npr.org/assets/img/2021/08/09/gettyimages-1229409136-db9b54a1546b7f503c7e812178f4cab5b707aca3.jpg",
];

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <h1 className="title">
          ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL.
        </h1>

        <div className="action">
          <OutlinedButton label="shop" action={() => console.log("Shop")} />
        </div>
      </div>
      <BgSlider images={images} />
    </div>
  );
};

export default Home;

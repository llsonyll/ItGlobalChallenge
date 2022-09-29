// import { useState } from "react";

import Header from "../header";
import BgSlider from "../BgSlider";
import OutlinedButton from "../OutLinedBtn";
import "./home.scss";

const images = [
  "http://songoftheroad.com/wp-content/uploads/2014/12/PeruParacasDay1CampSpotXPCamperCliffsBeach.jpg",
  "http://songoftheroad.com/wp-content/uploads/2014/12/PeruParacasDay2RedBeachSam.jpg",
  "http://songoftheroad.com/wp-content/uploads/2014/12/PeruParacasDay1EricaAtCampsiteChillaxes.jpg",
];

const items = [
  {
    id: "Item_1",
    icon: "MdOutlineHouseboat",
    text: "Pufi Puff",
    redirect: "puff",
  },
  {
    id: "Item_2",
    icon: "BsUmbrella",
    text: "Pufi Rain",
    redirect: "rain",
  },
  {
    id: "Item_3",
    icon: "IoShirtOutline",
    text: "Pufi Cart",
    redirect: "cart",
  },
  {
    id: "Item_4",
    icon: "MdOutlineBackpack",
    text: "Pufi Nap",
    redirect: "nap",
  },
];

const Home = () => {
  return (
    <div className="home">
      <Header items={items} />
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

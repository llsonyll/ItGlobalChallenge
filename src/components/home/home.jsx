import { useState } from "react";

import Header from "../header";
import OutlinedButton from "../OutLinedBtn";
import "./home.scss";

const images = [
  "http://songoftheroad.com/wp-content/uploads/2014/12/PeruParacasDay1CampSpotXPCamperCliffsBeach.jpg",
  "http://songoftheroad.com/wp-content/uploads/2014/12/PeruParacasDay2RedBeachSam.jpg",
  "http://songoftheroad.com/wp-content/uploads/2014/12/PeruParacasDay1EricaAtCampsiteChillaxes.jpg",
];

const Home = () => {
  const [bgImg, setBgImg] = useState(0);

  const bgStyles = {
    transform: `translateX(-${bgImg * 100}%)`,
  };

  const handleSwitchBg = (id) => {
    if (id === bgImg) return;
    setBgImg(id);
  };

  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <h1 className="title">
          ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL.
        </h1>

        <div className="action">
          <OutlinedButton />
        </div>
      </div>
      <div className="switch">
        {images.map((_, index) => {
          return (
            <button
              key={`switch-btn-${index}`}
              onClick={() => handleSwitchBg(index)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="background">
        {images.map((image, index) => {
          return (
            <div
              key={`bg-image-${index}`}
              className="bg-image"
              style={bgStyles}
            >
              <img src={image} alt="bg-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

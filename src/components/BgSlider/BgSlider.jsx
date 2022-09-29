import "./BgSlider.scss";

import { useState } from "react";

const BgSlider = ({ images = [] }) => {
  const [bgImg, setBgImg] = useState(0);

  const bgStyles = {
    transform: `translateX(-${bgImg * 100}%)`,
  };

  const switchButtonSelected = {
    border: "1px solid black",
  };

  const handleSwitchBg = (id) => {
    if (id === bgImg) return;
    setBgImg(id);
  };

  return (
    <>
      <div className="switch">
        {images.map((_, index) => {
          return (
            <button
              className={`switch__button ${index === bgImg ? "selected" : ""}`}
              key={`switch-btn-${index}`}
              onClick={() => handleSwitchBg(index)}
            ></button>
          );
        })}
      </div>
      <div className="background">
        {images.map((image, index) => {
          return (
            <div
              key={`bg-image-${index}`}
              className="background__bg-image"
              style={bgStyles}
            >
              <img src={image} alt="bg-1" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BgSlider;

import "./BgSlider.scss";

import { useState } from "react";

const BgSlider = ({ images = [] }) => {
  const [bgImg, setBgImg] = useState(0);

  const bgStyles = {
    transform: `translateX(-${bgImg * 100}%)`,
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
    </>
  );
};

export default BgSlider;

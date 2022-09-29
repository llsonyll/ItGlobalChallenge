import "./SubscribeTile.scss";

import { useState } from "react";

import TileTitle from "../TileTitle";

import { BsArrowRight } from "react-icons/bs";

const SubscribeTile = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <div className="subscribeTile">
      <TileTitle
        title="SUSCRIBITE"
        subtitle="NewsLetter"
        description="Y enterate de todas las novedades"
      />

      <form onSubmit={handleSubmit}>
        <div className="textInput">
          <input
            className="input"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <BsArrowRight className="inputIcon" />
        </div>
      </form>
    </div>
  );
};

export default SubscribeTile;

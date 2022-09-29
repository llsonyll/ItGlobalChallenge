import "./InstagramSlide.scss";

import TileTitle from "../TileTitle";

const InstagramSlide = () => {
  return (
    <section className="instagramSlide">
      <TileTitle title="#ESPUFI" subtitle="Instagram" />
      <a className="imageLink" href="#">
        <img
          src="https://wl-ideasen5minutos.cf.tsp.li/resize/728x/jpg/c50/de3/ec5c3a5fa1b3b252bd6a27e39a.jpg"
          alt="instagram"
        />
      </a>
    </section>
  );
};

export default InstagramSlide;

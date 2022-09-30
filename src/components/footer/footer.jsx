import "./footer.scss";
import { GiSwordBrandish } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { BiQrScan } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = ({}) => {
  const items = useSelector((state) => state.items.items);
  return (
    <div className="footer">
      <div className="footer_content">
        <img
          className="logo"
          src="https://simg.nicepng.com/png/small/31-315310_react-hexagon-react-js-transparent-background.png"
          alt="reactLogo"
        />
        <div className="cols">
          <ul className="col">
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <a href={`#${item.redirect}`}> {item.name} </a>
                </li>
              );
            })}
          </ul>
          <ul className="col">
            <li>
              <a
                href="https://www.linkedin.com/in/josep-jairo-rojas-baca-34975a1bb/"
                target="_blank"
              >
                Contacto
              </a>
            </li>
            <li>
              <a href="https://github.com/llsonyll" target="_blank">
                Ayuda
              </a>
            </li>
            <li>
              <a href="https://twitter.com/StrkJoseph" target="_blank">
                Cómo comprar{" "}
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/itglobal/"
                target="_blank"
              >
                Términos & condiciones
              </a>
            </li>
          </ul>
          <div className="col">
            <span> COMPRA 100% SEGURA </span>
            <div className="secure">
              <BiQrScan />
              <MdOutlineSecurity />
              <span> COMPRÁ CON LA GARANTIA DE PUFI </span>
            </div>
          </div>
          <div className="col col--social">
            <span> SIGUENOS EN </span>
            <div className="icons">
              <a
                href="https://www.facebook.com/JosepRojasNice/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/StrkJoseph" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/joshscp/" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_rights">
        <span> PUFI Copyright 2022 - Todos los derechos reservados </span>
        <GiSwordBrandish />
      </div>
    </div>
  );
};

export default Footer;

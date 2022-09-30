import "./footer.scss";
import { GiSwordBrandish } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { BiQrScan } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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

const Footer = ({}) => {
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
                  <a href={`#${item.redirect}`}> {item.text} </a>
                </li>
              );
            })}
          </ul>
          <ul className="col">
            <li>
              <a href="#"> Contacto </a>
            </li>
            <li>
              <a href="#"> Ayuda </a>
            </li>
            <li>
              <a href="#"> Cómo comprar </a>
            </li>
            <li>
              <a href="#"> Términos & condiciones </a>
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
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
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

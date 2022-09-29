import "./footer.scss";
import { GiSwordBrandish } from "react-icons/gi";

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
      <div className="footer__content">
        <div className="logo"></div>
        <div className="cols">
          <ul className="col">
            {items.map((item) => {
              return (
                <li>
                  <a href="#"> {item.text} </a>
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
            <div className="icons">
              {/* <BiQrScan /> */}
              {/* <MdOutlineSecurity /> */}
              <span> COMPRÁ CON LA GARANTIA DE PUFI </span>
            </div>
          </div>
          <div className="col">
            <span> SIGUENOS EN </span>
            <div className="icons">
              {/* <FaFacebookF /> */}
              {/* <FaTwitter /> */}
              {/* <FaInstagram /> */}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="">
        <span> PUFI Copyright 2022 - Todos los derechos reservados </span>
        <GiSwordBrandish />
      </div>
    </div>
  );
};

export default Footer;

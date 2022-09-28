import "./header.scss";
import ReactLogo from "../../assets/reactLogo.png";

// Components
import HeaderItem from "../HeaderItem";

import { AiOutlineDown } from "react-icons/ai";

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

const Header = () => {
  return (
    <div className="header">
      <a className="header__logo" href="#">
        <img src={ReactLogo} alt="puffiLogo" />
      </a>

      <div className="header__items">
        {items.map((i) => (
          <HeaderItem key={i.id} item={i} />
        ))}
      </div>

      <div className="header__actions">
        <a className="action" href="#">
          <span> MI CUENTA </span>
          <AiOutlineDown />
        </a>
        <a className="action" href="#">
          <span> MI COMPRA </span>
        </a>
      </div>
    </div>
  );
};

export default Header;

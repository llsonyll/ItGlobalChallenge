import "./header.scss";
import ReactLogo from "../../assets/reactLogo.png";

// Components
import HeaderItem from "../HeaderItem";

import { AiOutlineDown } from "react-icons/ai";

const Header = ({ items }) => {
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

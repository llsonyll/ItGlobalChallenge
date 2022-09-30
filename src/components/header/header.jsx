import "./header.scss";
import ReactLogo from "../../assets/reactLogo.png";
import { toggleCartModalState } from "./../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

// Components
import HeaderItem from "../HeaderItem";

import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  const items = useSelector((state) => state.items.items);
  const itemsQty = useSelector((state) => state.cart.cart.length);
  const dispatch = useDispatch();

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
        <button
          className="action action-cart"
          onClick={() => dispatch(toggleCartModalState(true))}
        >
          <span> MIS COMPRAS {itemsQty > 0 ? `(${itemsQty})` : ""} </span>
        </button>
      </div>
    </div>
  );
};

export default Header;

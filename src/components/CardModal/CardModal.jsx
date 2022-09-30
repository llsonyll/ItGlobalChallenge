import "./CardModal.scss";

import {
  toggleCartModalState,
  removeItem,
} from "./../../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

import { TiShoppingCart } from "react-icons/ti";
import { AiFillCloseSquare } from "react-icons/ai";

const CardModal = () => {
  const modalDisplayed = useSelector((state) => state.cart.showCardModal);
  const items = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const sideBarDynamicWidth = {
    transform: !!modalDisplayed ? "translateX(0px)" : "translateX(-400px)",
  };

  return (
    <div className="modal" style={sideBarDynamicWidth}>
      <div className="modal_content">
        <button
          className="closeBtn"
          onClick={() => dispatch(toggleCartModalState(false))}
        >
          <AiFillCloseSquare />
        </button>

        <div className="buy_description">
          <h1> Tu Carrito</h1>

          {items.length > 0 ? (
            <div className="items">
              {items.map((item) => {
                return (
                  <div key={item.id} className="">
                    <h2> {item.name}</h2>
                    <p> {item.description}</p>
                    <button onClick={() => dispatch(removeItem(item.id))}>
                      Quitar
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-items">
              <span> Aun no has añadido ningun producto </span>
              <TiShoppingCart className="icon" />
            </div>
          )}
        </div>
        <div className="buy_action">
          <button onClick={() => {}}> Comprar </button>
          <span> By Jairo 'llsonyll' Rojas</span>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

import "./ProductSlide.scss";
import OutlinedButton from "./../OutLinedBtn";
import { IoIosArrowForward } from "react-icons/io";

import { addItem } from "../../redux/actions/cartActions";

import { useDispatch, useSelector } from "react-redux";

const ProductSlide = ({ puffi }) => {
  if (!puffi) return null;
  const isPuffiAlreadyOnCart = useSelector(
    (state) => !!state.cart.cart.find((i) => i.id === puffi.id)
  );
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    if (isPuffiAlreadyOnCart) return;
    dispatch(addItem(puffi));
  };

  return (
    <section className="productSlide" id={puffi.redirect}>
      <div className="productSlide__side productSlide__side-image">
        <img src={puffi.background} alt="umbrellaPicture" />
        <div className="action">
          <OutlinedButton
            label={isPuffiAlreadyOnCart ? "En el carrito" : "Agregar a carrito"}
            action={handleAddItemToCart}
          />
        </div>
      </div>
      <div className="productSlide__side productSlide__side-description productSlide__side-description--tag">
        <img className="puff_img" src={puffi.imgUrl} alt="productImg" />
        <div className="puff_name"> {puffi.name} </div>
        <div className="puff_description">{puffi.description}</div>
        <button className="puff_action">
          <IoIosArrowForward />
          <span> Ver más</span>
        </button>
        <div className="puff_action puff_action-mobile">
          <OutlinedButton
            label={isPuffiAlreadyOnCart ? "En el carrito" : "Agregar a carrito"}
            action={handleAddItemToCart}
            lightMode={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSlide;

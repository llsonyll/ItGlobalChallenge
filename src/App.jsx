import Footer from "./components/footer";
import Home from "./components/home";
import InstagramSlide from "./components/InstagramSlide";
import ProductSlide from "./components/ProductSlide";
import SubscribeTile from "./components/SubscribeTile";
import CardModal from "./components/CardModal";

import { toggleCartModalState } from "./redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const puffies = useSelector((state) => state.items.items);
  const showCartModal = useSelector((state) => state.cart.showCardModal);
  return (
    <>
      <Home />
      {puffies.map((puffie) => (
        <ProductSlide key={puffie.id} puffi={puffie} />
      ))}
      <InstagramSlide />
      <SubscribeTile />
      <Footer />

      <CardModal />
    </>
  );
};

export default App;

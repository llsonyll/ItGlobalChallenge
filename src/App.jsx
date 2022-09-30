import Footer from "./components/footer";
import Home from "./components/home";
import InstagramSlide from "./components/InstagramSlide";
import ProductSlide from "./components/ProductSlide";
import SubscribeTile from "./components/SubscribeTile";

import { useSelector } from "react-redux";

const App = () => {
  const puffies = useSelector((state) => state.items.items);
  return (
    <>
      <Home />
      {puffies.map((puffie) => (
        <ProductSlide key={puffie.id} puffi={puffie} />
      ))}
      <InstagramSlide />
      <SubscribeTile />
      <Footer />
    </>
  );
};

export default App;

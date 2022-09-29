import Footer from "./components/footer";
import Home from "./components/home";
import ProductSlide from "./components/ProductSlide";

const puffies = [
  {
    id: "Item_1",
    name: "Puffi RAIN",
    imgUrl:
      "https://www.pngplay.com/wp-content/uploads/4/Umbrella-PNG-Photo-Image.png",
    background:
      "https://artist.com/photos/arts/extra-big/rain-in-colorful-umbrellas-1800376912.jpg",
    icon: "BsUmbrella",
    redirect: "rain",
    description: "Descripcion del producto. Este es un texto simulado.",
  },
  {
    id: "Item_2",
    name: "Pufi PUFF",
    imgUrl:
      "https://www.pngplay.com/wp-content/uploads/4/Umbrella-PNG-Photo-Image.png",
    background:
      "https://artist.com/photos/arts/extra-big/rain-in-colorful-umbrellas-1800376912.jpg",
    icon: "MdOutlineHouseboat",
    redirect: "puff",
    description: "Descripcion del producto. Este es un texto simulado.",
  },
  {
    id: "Item_3",
    name: "Puffi CART",
    imgUrl:
      "https://www.pngplay.com/wp-content/uploads/4/Umbrella-PNG-Photo-Image.png",
    background:
      "https://artist.com/photos/arts/extra-big/rain-in-colorful-umbrellas-1800376912.jpg",
    icon: "IoShirtOutline",
    redirect: "cart",
    description: "Descripcion del producto. Este es un texto simulado.",
  },
  {
    id: "Item_4",
    name: "Puffi NAP",
    imgUrl:
      "https://www.pngplay.com/wp-content/uploads/4/Umbrella-PNG-Photo-Image.png",
    background:
      "https://artist.com/photos/arts/extra-big/rain-in-colorful-umbrellas-1800376912.jpg",
    icon: "MdOutlineBackpack",
    redirect: "nap",
    description: "Descripcion del producto. Este es un texto simulado.",
  },
];

const App = () => {
  return (
    <>
      <Home />

      {puffies.map((puffie) => (
        <ProductSlide puffi={puffie} />
      ))}
      <Footer />
    </>
  );
};

export default App;

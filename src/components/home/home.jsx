import Header from "../header";
import OutlinedButton from "../OutLinedBtn";
import "./home.scss";

const imgUrl_1 =
  "http://songoftheroad.com/wp-content/uploads/2014/12/PeruParacasDay2RedBeachSam.jpg";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__content">
        <h1 className="title">
          ESTÁR CÓMODO, <br /> NUNCA FUE TAN FÁCIL{" "}
        </h1>

        <div className="action">
          <OutlinedButton />
        </div>
      </div>
      <div className="switch">
        <button> 1 </button>
        <button>2 </button>
        <button>3</button>
      </div>
    </div>
  );
};

export default Home;

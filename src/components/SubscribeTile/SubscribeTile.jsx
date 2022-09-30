import "./SubscribeTile.scss";
import TileTitle from "../TileTitle";
import { useForm, ValidationError } from "@formspree/react";
import { BsArrowRight } from "react-icons/bs";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvoyroro");

  if (state.succeeded) {
    return <p>Thanks for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="textInput">
        <input
          className="input"
          id="email"
          name="email"
          type="email"
          placeholder="Enviame un mensaje usando tu correo personal"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        {state.errors.length > 0 && <p className="error"> {state.errors[0]}</p>}
        <BsArrowRight className="inputIcon" />
      </div>
      <button className="submitBtn" type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
};

const SubscribeTile = () => {
  return (
    <div className="subscribeTile">
      <TileTitle
        title="SUSCRIBITE"
        subtitle="NewsLetter"
        description="Y enterate de todas las novedades"
      />

      <ContactForm />
    </div>
  );
};

export default SubscribeTile;

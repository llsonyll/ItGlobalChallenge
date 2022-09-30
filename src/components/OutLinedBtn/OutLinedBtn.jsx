import "./OutLinedBtn.scss";

const OutLinedBtn = ({
  label = "Outlined Button",
  action = () => {},
  lightMode = true,
}) => {
  const borderStyle = lightMode
    ? {
        border: "2px solid white",
        color: "white",
      }
    : {
        border: "2px solid black",
        color: "black",
      };

  return (
    <button className="button" onClick={action} style={borderStyle}>
      {label}
    </button>
  );
};

export default OutLinedBtn;

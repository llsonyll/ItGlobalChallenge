import "./OutLinedBtn.scss";

const OutLinedBtn = ({ label = "Outlined Button", action = () => {} }) => {
  return (
    <button className="button" onClick={action}>
      {label}
    </button>
  );
};

export default OutLinedBtn;

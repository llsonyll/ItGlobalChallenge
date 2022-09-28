const OutLinedBtn = ({ label = "OutlinedButton", action = () => {} }) => {
  return (
    <button className="button" onClick={action}>
      {label}
    </button>
  );
};

export default OutLinedBtn;

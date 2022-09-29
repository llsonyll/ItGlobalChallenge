import "./TileTitle.scss";

const TileTitle = ({ title = "", subtitle = "", description = "" }) => {
  return (
    <div className="tileTitle">
      <span className="tileTitle_subtitle"> {subtitle} </span>
      <h1 className="tileTitle_title"> {title} </h1>
      {description && (
        <div className="tileTitle_description"> {description} </div>
      )}
    </div>
  );
};

export default TileTitle;

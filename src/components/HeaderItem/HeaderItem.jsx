import "./HeaderItem.scss";

import { MdOutlineHouseboat, MdOutlineBackpack } from "react-icons/md";
import { BsUmbrella } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";

const HeaderItem = ({ item }) => {
  // item > imgUrl, text, redirect

  const renderIcon = () => {
    switch (item.icon) {
      case "MdOutlineHouseboat":
        return <MdOutlineHouseboat />;
      case "MdOutlineBackpack":
        return <MdOutlineBackpack />;
      case "BsUmbrella":
        return <BsUmbrella />;
      case "IoShirtOutline":
        return <IoShirtOutline />;
      default:
        return <MdOutlineHouseboat />;
    }
  };

  return (
    <a href={`#${item.redirect}`} className="headerItem">
      <div className="headerItem__icon">{renderIcon()}</div>
      <div className="headerItem__label"> {item.text} </div>
    </a>
  );
};

export default HeaderItem;

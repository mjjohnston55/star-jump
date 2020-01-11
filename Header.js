import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    {/*pass in all children defined in the Header component tag from App.js*/}
<div className="title">{props.currentShape}</div>
  </div>
);

export default Header;


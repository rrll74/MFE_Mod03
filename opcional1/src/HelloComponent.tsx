import React from "react";
import classes from "./mystyles.scss";
import logo1 from "./content/logo_1.png";
import logo2 from "./content/logo_2.png";

export const HelloComponent = () => {
  return (
    <div>
      <div className={classes.coloredBackground}>Hello World!!!</div>
      <div id="imgContainer">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
      </div>
    </div>
  );
};

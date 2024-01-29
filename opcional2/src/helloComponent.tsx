import React from "react";
import * as classes from "./helloComponent.module.scss";

export const HelloComponent: React.FC = () => {
  return <h1 className={classes.coloredtext}>Hello colored in SCSS module from React</h1>;
};
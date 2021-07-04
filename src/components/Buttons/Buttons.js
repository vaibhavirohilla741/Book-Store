import React from "react";
import classes from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={classes.ButtonContainer}>
      <button>Adventure</button>
      <button>Biographic</button>
      <button>Children</button>
      <button>Cook</button>
    </div>
  );
};

export default Buttons;

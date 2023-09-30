import React from "react";
import Profiles from "../Profiles/Profiles";

import style from "./landing.module.css";

const LandingPage = () => {
  return (
    <div className={style.landingMain}>
      <div className={style.card}>
        <h1 className={style.card_top}>Select an account</h1>
        <Profiles />
      </div>
    </div>
  );
};

export default LandingPage;

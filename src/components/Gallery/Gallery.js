import React, { useContext } from "react";

import {UsersContext } from "../../ContextApi/UsersContext";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

import style from "../emptyPage.module.css"

const Gallery = () => {
  const { setShowProfile } = useContext(UsersContext); // getting data from contest api

  return (
    <div className={style.mainDiv}>
      {/* --------- Left Navbar -------- */}
      <Navigation />

      {/* ---------- Profile --------- */}
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>Gallery</h2>
          <Header />
        </div>

        <hr style={{ color: "grey", width: "100%" }} />

        {/* ---------- Screen ------- */}
        <div className={style.screen} onClick={() => setShowProfile(false)}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

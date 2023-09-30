import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { UsersContext } from "../../ContextApi/UsersContext";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import style from "../homepage.module.css";

const HomePage = () => {
  const { profileData, getFilterData, setShowProfile } =
    useContext(UsersContext); // getting data from contest api
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  // ------------ (fetching data with param id)---------
  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);

  return (
    <div>
      <div className={style.HomeMain}>
        {/* ------------ (Left navbar)---------- */}
        <Navigation />
        {/* ----------- (Right part)------------- */}
        {profileData &&
          profileData.map((el) => (
            <div
              style={{ width: "80%" }}
              className={style.profile_top}
              key={el.id}
            >
              {/* ---------- top nav------- */}
              <div className={style.profile}>
                <h2>Profile</h2>
                <Header />
              </div>

              <hr />
              {/* ------------- (bottom)------------- */}
              <div onClick={() => setShowProfile(false)}>
                <Footer {...el} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;

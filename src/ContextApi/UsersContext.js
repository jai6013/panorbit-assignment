import React, { useState } from "react";
import { createContext } from "react";
import { getProfile } from "../services/api";

export const UsersContext = createContext();
const UsersContextProvider = ({ children }) => {
  // --------- profile show hide -------
  const [showProfile, setShowProfile] = useState(false);

  // --------------------
  const [profileData, setProfileData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ------------ Getting data from Api -------
  const getAllData = () => {
    setLoading(true);
    setError(false);
    getProfile()
      .then((res) => {
        setData(res.data.users);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  };

  // ------------ (fetching data with param id)---------
  const getFilterData = (id) => {
    getProfile()
      .then((res) => {
        setProfileData(res.data.users.filter((el) => el.id === Number(id)));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <UsersContext.Provider
      value={{
        data,
        profileData,
        getFilterData,
        loading,
        error,
        getAllData,
        setShowProfile,
        showProfile,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;

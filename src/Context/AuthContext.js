import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthContextProvider = props => {

  const [activeUser, setActiveUser] = useState({})
  const [config, setConfig] = useState({
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  })


  useEffect(() => {
    controlAuth()
  }, [])

  const controlAuth = async () => {
    try {
      const { data } = await axios.get("https://delivery-wheat.vercel.app/auth/private", config, { withCredentials: true },);
      setActiveUser(data.user)
    }
    catch (error) {

      localStorage.removeItem("authToken");

      setActiveUser({})
    }
  };

  return (
    <AuthContext.Provider value={{ activeUser, setActiveUser, config, setConfig }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

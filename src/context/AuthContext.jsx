import React, { createContext, useContext, useEffect, useState } from "react";

export const Auth = createContext({});

const AuthContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
  });

  useEffect(() => {
    const userStorage = localStorage.getItem("@api/email");
    if (userStorage) {
      setUser(JSON.parse(userStorage));
    } else {
      setUser({
        email: "",
      });
    }
  }, []);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};

export default AuthContext;

export const useAuth = () => useContext(Auth);

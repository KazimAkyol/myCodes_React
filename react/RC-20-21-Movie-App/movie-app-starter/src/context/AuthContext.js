import React, { createContext } from "react";

//! context alani create edelim:
export const YetkiContext = createContext();

const AuthContext = ({ children }) => {
  //! register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr

  const createKullanici=

  return <YetkiContext.Provider>{children}</YetkiContext.Provider>;
};

export default AuthContext;

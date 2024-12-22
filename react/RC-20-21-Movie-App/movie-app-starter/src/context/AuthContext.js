import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { successToast } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//! context alani create edelim:
export const YetkiContext = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  //! register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr

  const createKullanici = async (email, password) => {
    //? sitede ilk defa kullanıcı adı oluşturmak için kullanılan firebase metodu:
    await createUserWithEmailAndPassword(auth, email, password);

    successToast("Kayit basarili");

    navigate("/");
  };

  //? kayıt olduktan sonraki giriş için login den çağırılacak firebase metodu:

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);

    successToast("giris basarili");

    navigate("/");
  };

  return (
    <YetkiContext.Provider value={{ createKullanici, login }}>
      {children}
    </YetkiContext.Provider>
  );
};

export default AuthContext;

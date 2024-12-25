import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { errorToast, successToast } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//! context alani create edelim:
export const YetkiContext = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  //! register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr

  const createKullanici = async (email, password) => {
    try {
      //? sitede ilk defa kullanıcı adı oluşturmak için kullanılan firebase metodu:
      await createUserWithEmailAndPassword(auth, email, password);

      successToast("Kayit basarili");

      navigate("/");
    } catch (error) {
      errorToast(error.message);
    }
  };

  //? kayıt olduktan sonraki giriş için login den çağırılacak firebase metodu:

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      successToast("giris basarili");

      navigate("/");
    } catch (error) {
      errorToast(error.message);
    }
  };

  //! google ile giriş:

  //* https://firebase.google.com/docs/auth/web/google-signin?hl=tr

  const signUpGooglE = () => {
    //? google hesaplarıma ulaşmak için firebase kodu:
    const provider = new GoogleAuthProvider();

    //?açılır pencerede google hesaplarının gelmesi için firebase metodu:

    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
      successToast("google ile giris basarili");

      navigate("/");
    });
  };

  //! siteden cikis

  const cikis = () => {
    signOut(auth);

    successToast("cikis basarili");
  };

  return (
    <YetkiContext.Provider
      value={{ createKullanici, login, signUpGooglE, cikis }}
    >
      {children}
    </YetkiContext.Provider>
  );
};

export default AuthContext;

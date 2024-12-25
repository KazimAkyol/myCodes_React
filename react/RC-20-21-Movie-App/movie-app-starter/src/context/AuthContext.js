import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { errorToast, successToast } from "../helpers/ToastNotify";
import { useNavigate } from "react-router-dom";

//! context alani create edelim:
export const YetkiContext = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();

  //? burada login, register yada google'dan gelen displayName ve email'i navbarda bastırmak üzere, navbar'a gönderebilmek için alttaki state'e attık:

  const [currentUser, setCurrentUser] = useState();

  //! Bu sayfaya ister login ister register ister google için gelin, sadece bir seferliğine user kontrolü yapan fonksiyonu çalıştır:

  useEffect(() => {
    userTakip();
  }, []);

  //! register için (sitede zincir yapılı fetch işlemi var biz burada async await i tercih ettik)
  // https://firebase.google.com/docs/auth/web/start?hl=tr

  const createKullanici = async (email, password, displayName) => {
    try {
      //? sitede ilk defa kullanıcı adı oluşturmak için kullanılan firebase metodu:
      await createUserWithEmailAndPassword(auth, email, password);

      successToast("Kayit basarili");

      navigate("/");

      //? UserTakip'ten sonra kullanıcı profilini güncellemek için kullanılan firebase metodu, login logout da userTakip sayesinde güncelleniyor ama register da isim güncellemesi yok, o da bu şekilde oluyor, alttakini yazmazsam (register ile girdiğimde) navbarda displayName i göremem. Alttakini yazmazsam sadece google ile girersem görürüm.

      await updateProfile(auth.currentUser, { displayName: displayName });
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

  //? Kullanıcının signIn olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu. Bir kere çalıştır login logout takip eder.login ile bilgiler gelir bizde burada currentUser'ın içine atarız, signout olunca bilgiler gider bizde currentUser ın içini güncelleriz (register ve logindeki email vs ye navbardan ulaşabilmek için). google ile giriş yapınca user ile displayname gelir ama email ile girecekseniz en üstte update kodunu firebase den çağırmalısınız.(userObserver)

  const userTakip = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoUrl } = user;

        setCurrentUser({ email, displayName, photoUrl });
      } else {
        setCurrentUser(false);
      }
    });
  };

  return (
    <YetkiContext.Provider
      value={{ createKullanici, login, signUpGooglE, cikis, currentUser }}
    >
      {children}
    </YetkiContext.Provider>
  );
};

export default AuthContext;

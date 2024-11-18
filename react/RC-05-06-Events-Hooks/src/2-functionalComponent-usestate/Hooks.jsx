import React, { useState } from "react";
import Events from "../1-events-hooksintro/Events";

//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza olanak saglayan özel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in kullanimini cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in Hook bulunmaktadir. Ayrica custom hook tanimlamak da mümkündür.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar üst seviyede tanimlanmalidir. Yani Hook'lar bir döngünün, kosul cümleciginin ve ic ice fonksiyonlarin icerisinde kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir. Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

const Hooks = () => {
  //! usestate hook'u her zaman en tepeye yazilmali
  const [sayac, setSayac] = useState(0);
  // let sayac = 0;

  const [kisi, setKisi] = useState({
    isim: "kazim",
    meslek: "developer",
    yas: 34,
    renk: "red",
  });

  const degistir = () => {
    if (kisi.isim === "kazim") {
      setKisi({
        isim: "gökhan",
        meslek: "cevirmen",
        yas: 35,
        renk: "blue",
      });
    } else {
      setKisi({
        isim: "kazim",
        meslek: "developer",
        yas: 34,
        renk: "red",
      });
    }
  };
  const arttir = () => {
    setSayac(sayac + 1);
    // sayac = sayac + 1;
  };
  return (
    <div>
      <h2>****************************</h2>
      <h2>****************************</h2>
      <h1>USESTATE</h1>

      <h2>COUNT:{sayac}</h2>

      <button onClick={arttir} className="btn btn-primary">
        ARTTIR
      </button>

      <button
        onClick={() => sayac > 0 && setSayac(sayac - 1)}
        className="btn btn-info"
      >
        AZALT
      </button>

      <h1>**********************************</h1>

      <div className="text-center">
        <h1>OBJECT İLE USESTATE KULLANIMI </h1>
        <h2 className="text-danger">{kisi.isim}</h2>
        <h3 className="text-primary">{kisi.meslek}</h3>
        <h5 className="text-success">{kisi.yas}</h5>

        <button
          onClick={degistir}
          style={{ backgroundColor: kisi.renk, color: "yellow" }}
          className="btn m-4 p-4"
        >
          ToggleDEĞİŞTİR
        </button>

        {kisi.renk === "blue" && <Events />}
        {/* kisi.renk===blue iken Events comp basılsın dedim. bunu yapmak istiyorsam App.js deki Events'i yoruma almalıyım. */}

        {/* <button
          onClick={() =>
            setKisi({
              isim: "fatma",
              meslek: "developer",
              yas: 34,
              renk: "red",
            })
          }
          style={{ backgroundColor: kisi.renk }}
          className="btn m-4 p-4"
        >
          İsimDEĞİŞTİR
        </button> */}

        <button
          onClick={() =>
            setKisi({
              ...kisi,
              isim: "fatma",
            })
          }
          style={{ backgroundColor: kisi.renk }}
          className="btn m-4 p-4"
        >
          İsimDEĞİŞTİR
        </button>
      </div>
    </div>
  );
};

export default Hooks;

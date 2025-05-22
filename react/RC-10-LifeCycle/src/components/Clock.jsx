//! UseEffect
//* İlk argüman bir fonksiyondur.Bu fonksiyon içinde API çağrıları, zamanlayıcı başlatma gibi işlemler gerçekleştirilir.
//* İkinci argüman olarak verilen bir bağımlılık dizisi (dependency array) sayesinde useEffect, ne zaman çalışacağını belirler.
//* Eğer dependency array verilmezse, sonsuz döngü oluşabilir, çünkü her render'da useEffect tekrar çalışır.

import React, { useEffect, useState } from "react";
import moment from "moment";

const Clock = () => {
  const [zaman, setZaman] = useState(moment);
  const [count, setCount] = useState(0);

  //! Component Did Mount işlemi
  // Yeni Hook useEffect hook'u

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("artis var");
      setZaman(moment());
    }, 1000);

    //! ComponentWillUnmount
    //Componenti öldürdük
    return () => {
      setInterval(timer);
    };
  }, []);
  // Köşeli parantez kullanımı bir defa render ediyor demektir.

  //! Component Did Update karsiligi olarak useEffect kullaniyoruz.

  useEffect(() => {
    console.log("Did Update calisti");
  }, [count]);

  return (
    <div className="container d-flex justify-content-center mt-3 w-50">
      <div className="card shadow-lg p-4 rounded">
        <h1 className="display-4 text-center text-primary">
          {zaman.format("HH:mm:ss")}
        </h1>
        <p className="text-center text-muted">Anlik Saat</p>
      </div>
      <p>**************************</p>
      <div className="container d-flex justify-content-center mt-3 w-50">
        <div className="card shadow-lg p-4 rounded">
          <h1 className="display-4 text-center text-primary">
            Counter:{count}
          </h1>
          <button
            className="btn btn-success"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clock;

import React, { useState } from "react";
import uuid from "react-uuid";

const AddPatient = ({ hastalar, setHastalar, doktorlar }) => {
  const [hastaName, setHastaName] = useState("");
  const [hastaTarih, setTarih] = useState("");

  console.log(doktorlar);

  const handleSubmitt = (e) => {
    e.preventDefault(); // direkt submit olayini yapma, önce alttaki kodlara bak

    setHastalar([
      ...hastalar,
      {
        id: uuid(),
        patientName: hastaName,
        day: hastaTarih,
        isDone: false,
        myDoctor: doktorlar[0].doctorName,
      },
    ]);

    // setHastalar'a gidildiginde hemen altta console.log varsa calisiverir ve biz UseState'in yaptigi isi göremeyiz. Bunun icin log bu submit fonksiyonunun disinda olmali.

    setHastaName("");
    setTarih("");
    // submit sonrasi inputlardan value temizlemek PictureInPictureWindow, hem üstteki islemler yapilir hem de inputlarda value={isim} yazarak browser'da bosluksa bosluk isimse isim gözükmesi saglanir.
  };

  console.log(hastalar);

  return (
    <div>
      <form onSubmit={handleSubmitt}>
        <div className="form-control">
          <label htmlFor="text">Hasta Bilgileri</label>
          <input
            id="text"
            type="text"
            onChange={(e) => setHastaName(e.target.value)}
            value={hastaName}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            id="day"
            type="datetime-local"
            onChange={(e) => setTarih(e.target.value)}
            value={hastaTarih}
          />
        </div>
        <div>
          <button type="submit" className="kayit btn-submit">
            <span style={{ color: "#6a0707" }}>
              {" "}
              {doktorlar[0].doctorName}{" "}
            </span>{" "}
            icin kayit olustur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;

import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const PatientList = ({ hastalar, setHastalar, doktorlar }) => {
  return (
    <div>
      {hastalar.map((hasta) => (
        <div key={hasta.id}>
          {doktorlar.map(
            (a) =>
              a.doctorName === hasta.myDoctor && (
                <div
                  className={hasta.isDone ? "trueStil" : "falseStyle"}
                  onDoubleClick={() =>
                    setHastalar(
                      hastalar.map((a) =>
                        a.id === hasta.id ? { ...a, isDone: !a.isDone } : a
                      )
                    )
                  }
                >
                  {/* ilk önce hastalar dizisinde gezip 6 hastayi hastaName'yle bastiriyoruz, sonra onDoubleClick yaptigimiz icin hastalar dizisinde gezinme bitmis oluyor. Dolayisiyla onDoubleClick sonucu gelen setHastalar ile dizide yapacagimiz degisiklikte kimi tikladigimizi belirtmemiz gerekiyor. Bu yüzden tamirci icinde hastalar dizisinde dolasip ekranda tikladigimiz hastamizin id'si ile dizide id'si tutan hastanin diger bilgileri kalsin; isDone'i, varolanin tersiyle degissin. */}
                  <div>
                    <h2>{hasta.patientName}</h2>
                    <h4>{hasta.day}</h4>
                    <h3>{hasta.myDoctor}</h3>
                  </div>
                  <div>
                    <FaTimesCircle
                      style={{ color: "red" }}
                      onClick={() =>
                        setHastalar(hastalar.filter((a) => a.id !== hasta.id))
                      }
                    />
                  </div>
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default PatientList;

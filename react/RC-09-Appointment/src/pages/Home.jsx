import React, { useState } from "react";
import AddPatient from "../components/AddPatient";
import PatientList from "../components/PatientList";

import { hastaData, doctorData } from "../helper/Data";

const Home = () => {
  const [doktorlar, setDoktorlar] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);
  const [tikla, setTikla] = useState(true);

  const doctorClick = (abc) => {
    // tikla'yi degistir
    setTikla(!tikla);

    // doktorlar dizisini tiklanan doktorla tek elemanli yap
    setDoktorlar(tikla ? doktorlar.filter((i) => i.id === abc) : doctorData);
  };

  return (
    <div
      style={{
        display: tikla ? "block" : "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <header className="header">
          <h1>HOSPITAL</h1>

          <div className="dr">
            {doktorlar.map((doc) => (
              <div key={doc.id}>
                <img
                  src={doc.doctorImg}
                  alt=""
                  width="180px"
                  height="150px"
                  className="btn"
                  style={{ backgroundColor: tikla ? "aqua" : "lightgreen" }}
                  onClick={() => doctorClick(doc.id)}
                />

                <h4
                  style={{
                    backgroundColor: tikla ? "aqua" : "lightgreen",
                    borderLeft: `10px solid ${tikla ? "blue" : "green"}`,
                  }}
                >
                  {doc.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>
        {!tikla && (
          <AddPatient
            hastalar={hastalar}
            setHastalar={setHastalar}
            doktorlar={doktorlar}
          />
        )}
      </div>

      <PatientList
        hastalar={hastalar}
        setHastalar={setHastalar}
        doktorlar={doktorlar}
      />
    </div>
  );
};

export default Home;

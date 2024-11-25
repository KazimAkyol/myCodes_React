import React, { useState } from "react";

import { hastaData, doctorData } from "../helper/Data";

const Home = () => {
  const [doktorlar, setDoktorlar] = useState(doctorData);
  const [hastalar, setPatient] = useState(hastaData);
  const [show, setShow] = useState(true);

  return (
    <div>
      <header className="header">
        <h1>HOSPITAL</h1>

        <div className="dr">
            {doktorlar.map((doc)=> (
                <div>
                    <img src={doc.doctorImg} alt="" />

                    <h4>
                    {doc.doctorName}
                    </h4>
                </div>
            ))}
        </div>
      </header>

      <div>
        addpatient
      </div>

      patientlist
    </div>
  );
};

export default Home;

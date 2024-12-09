import React from "react";
import AnaUser from "./AnaUser";
import { useContext } from "react";
import { KullaniciContext } from "../context/KullaniciProvider";

const Isimler = () => {
  //! 4- context consumer

  const { users } = useContext(KullaniciContext);

  return (
    <div>
      {users.slice(0, 4).map((i) => (
        <div style={{ background: "pink", textAlign: "center" }}>{i.login}</div>
      ))}

      <AnaUser />
    </div>
  );
};

export default Isimler;

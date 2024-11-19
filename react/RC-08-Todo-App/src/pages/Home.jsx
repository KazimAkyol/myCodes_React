import React, { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from "../helper/Data";

const Home = () => {

    const[yapilacak,setYapilacak] = useState(Data);
    // console.log(yapilacak);

  return (
    <div>
      <GorevEkle />

      <GorevleriGoster yapilacak={yapilacak} />
    </div>
  );
};

export default Home;

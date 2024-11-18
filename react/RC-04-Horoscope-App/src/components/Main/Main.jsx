import React from "react";

import { data } from "../../helper/data";
import Card from "./Card";

//! export default ile değil de her dizinin kendine özel export'u varsa, import yaparken dest {} kullanılır.

const Main = () => {
  console.log(data);

  return (
    <div className="card-container">
      {/* {data.map((burc) => (<Card hrscp={burc} />))} */}
      {data.map((burc) => (
        <Card {...burc} />
      ))}
    </div>
  );
};

export default Main;

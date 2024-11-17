import React from "react";

const Card = ({ veri }) => {
  console.log(veri);

  //! react alanında (ekrana basarken) döngü olarak sadece map desteklenir,condition'lardan da sadece ternary desteklenir.

  //! map döngüsü kullanılan her projede map'ten sonraki ilk etikete key={id} yazılır.

  return (
    <div>
      {veri.map((a) => (
        <div key={a.id}>
          <h1>{a.name}</h1>
          <h2>{a.job}</h2>
          <p>{a.comment}</p>
          <img src={a.img} alt="user" />
          <div>
            <button>Small</button>
            <button>Large</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

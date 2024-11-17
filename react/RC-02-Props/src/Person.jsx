import React from "react";

const Person = (props) => {
  // console.log(props);
  // console.log(props.kisi.name);

  const { name, img, tel } = props.kisi;

  return (
    <div>
      <h1>{name}</h1>

      <img src={img} alt="" />

      <p>{tel}</p>
    </div>
  );
};

export default Person;

import React from "react";

// const Card = ({ hrscp }) => {
// console.log(hrscp);

//   const { title, image, date, desc } = hrscp;

const Card = ({ id, title, date, image, desc }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>

      <div>
        <h1>{date}</h1>
      </div>

      <img src={image} alt="" />

      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;

import React from "react";

const Message = (props) => {
  console.log(props); // props.isim
  return (
    <div>
      <h1 style={{ color: "red" }}>
        Benim adim {props.isim} telefon numaram {props.telefon}
      </h1>
    </div>
  );
};

export default Message;

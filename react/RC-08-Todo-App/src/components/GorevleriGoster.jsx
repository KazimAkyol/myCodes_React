import React from "react";
import { TiDelete } from "react-icons/ti";

const GorevleriGoster = ({ yapilacak, setYapilacak }) => {
  return (
    <div>
      {yapilacak.map((a) => (
        <div
          key={a.id}
          className={a.isDone === true ? "done" : "gorev"}
          onDoubleClick={() =>
            setYapilacak(
              yapilacak.map((dizi) =>
                dizi.id === a.id ? { ...dizi, isDone: !dizi.isDone } : dizi
              )
            )
          }
        >
          <h3>
            {a.text}
            <TiDelete />
          </h3>
        </div>
      ))}
    </div>
  );
};

export default GorevleriGoster;

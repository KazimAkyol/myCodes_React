import React from "react";
import { TiDelete } from "react-icons/ti";

const GorevleriGoster = ({ yapilacak, setYapilacak }) => {
  return (
    <div>
      {yapilacak.map((a) => (
        <div className={a.isDone === true ? "done" : "gorev"}>
          <h3>
            {a.text}

            <TiDelete
              style={{ color: "red" }}
              onClick={() =>
                setYapilacak(yapilacak.filter((x) => x.id !== a.id))
              }
            />
          </h3>

          <h6>{a.day}</h6>
        </div>
      ))}
    </div>
  );
};

export default GorevleriGoster;

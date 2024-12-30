import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";


const TodoItem = ({gorev}) => {



  return (
    <div
      style={{
        textDecoration: gorev.bittiMi===true ?  "line-through": "none" ,
        background: gorev.bittiMi ? "#A9A9A9" : "orange",
        borderRadius: "5px",
      }}
      className="todo-list"
    >
      <h2 className="todoText">{gorev.yapilacak}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
           

           
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;

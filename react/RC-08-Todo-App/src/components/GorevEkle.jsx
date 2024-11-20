import React, { useState } from "react";

const GorevEkle = () => {
  const [todo, SetTodo] = useState("");
  const [day, setDay] = useState("");

  const gonder = (e) => {
    e.preventDefault()

    
  }

  return (
    <div>
      <header className="header">
        <h1>TO DO APP</h1>
        <button className="btn" style={{ background: "red" }}>
          CLOSE ADD TASK BAR
        </button>
      </header>

      <form onSubmit={gonder}>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input
            id="text"
            type="text"
            name="text"
            onChange={(e) => SetTodo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input
            id="day"
            type="datetime-local"
            name="day"
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-submit" type="submit">
            SUBMİT
          </button>
        </div>
      </form>
    </div>
  );
};

export default GorevEkle;

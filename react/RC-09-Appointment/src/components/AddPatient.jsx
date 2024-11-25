import React from "react";

const AddPatient = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="text">Task</label>
          <input id="text" type="text" name="text" />
        </div>
        <div className="form-control">
          <label htmlFor="day">Day & Time</label>
          <input id="day" type="datetime-local" name="day" />
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

export default AddPatient;

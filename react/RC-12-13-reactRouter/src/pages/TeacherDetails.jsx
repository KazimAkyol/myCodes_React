import React from "react";
import { useLocation } from "react-router-dom";

const TeacherDetails = () => {
  const {
    state: { kisi },
  } = useLocation();
  return (
    <div>
      <img
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${kisi.id}`}
        alt=""
      />
      <h3>{kisi.name}</h3>
      <h2>{kisi.email}</h2>
      <h5>{kisi.website}</h5>
      <h5>{kisi.phone}</h5>
    </div>
  );
};

export default TeacherDetails;

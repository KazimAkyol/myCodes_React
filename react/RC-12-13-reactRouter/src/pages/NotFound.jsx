import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../img/notFound.jpeg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="text-center">
      <img src={notFound} width="500px" alt="" />
      <div>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          GO HOME
        </button>
      </div>
    </Container>
  );
};

export default NotFound;

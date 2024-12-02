import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  console.log(data);
  return (
    <>
      <div>
        <Form.Control
          placeholder="Search Player..."
          aria-label="search"
          aria-describedby="basic-addon1"
          className="w-50"
        />
        <Container>
          <Row>
            {data.map((player) => (
              <PlayerCard />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CardContainer;

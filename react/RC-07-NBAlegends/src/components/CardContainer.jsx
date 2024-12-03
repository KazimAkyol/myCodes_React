import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  // console.log(data);
  return (
    <>
      <Row>
        <Form.Control
          placeholder="Search Player..."
          aria-label="search"
          aria-describedby="basic-addon1"
          className="w-50 m-auto"
        />
        <Container className="my-2 kartContainer">
          <Row xs={1} md={2} lg={4}>
            {data.map((player) => (
              <Col className="my-2" key={player.name}>
                <PlayerCard {...player} />
              </Col>
            ))}
          </Row>
        </Container>
      </Row>
    </>
  );
};

export default CardContainer;

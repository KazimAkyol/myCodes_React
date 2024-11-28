import React from "react";
import data from "../data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseCard = () => {
  return (
    <div>
      {data.map((a) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={a.img} />
            <Card.Body>
              <Card.Title>{a.name}</Card.Title>
              <Card.Text>{a.text}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;

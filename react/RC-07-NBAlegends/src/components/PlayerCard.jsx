import React, { useState } from "react";
import { Card } from "react-bootstrap";

const PlayerCard = ({ name, img, statistics }) => {
  const [gosterImage, setGosterImage] = useState(true);

  return (
    <Card style={{ width: "18rem" }} className="player-kart">
      <Card.Img variant="top" src={img} className="player-resim" />
      <Card.Footer className="text-muted"></Card.Footer>
      <Card.Title>{name}</Card.Title>
    </Card>
  );
};

export default PlayerCard;

import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

const PlayerCard = () => {


 const[gosterImage,setGosterImage]=useState(true)

  return (
    <div
      className="player-card m-auto"
      role="button"
      //  tıklanınca gosterImage true-false değişsin
    >
      
      {/* {
  gosterImage true iken babadan gelen datanın image sini ismini bastır, gosterImage false iken statistic i ul li lere bastır
} */}
    </div>
  );
}

export default PlayerCard
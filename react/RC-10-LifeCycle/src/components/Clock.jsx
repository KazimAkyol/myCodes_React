import React, { useState } from 'react'
import moment from "moment"

const Clock = () => {
    const[zaman, setZaman]=useState(moment)
  return (
    <div className="container d-flex justify-content-center mt-3 w-50">
        <div className="card shadow-lg p-4 rounded">
          <h1 className="display-4 text-center text-primary">
            {zaman.format("HH:mm:ss")}
          </h1>
          <p className="text-center text-muted">Anlik Saat</p>
        </div>
      </div>
  )
}

export default Clock
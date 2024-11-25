import React, { useState } from 'react'

const AddPatient = ({hastalar, setHastalar}) => {

    const [hastaName, setHastaName] = useState("")
    const [hastaTarih, setTarih] = useState("")

    const handleSubmitt = (e) => {
        e.preventDefault() // direkt submit olayini yapma, önce alttaki kodlara bak


    }

  return (
    <div>
                <form onSubmit={handleSubmitt}>
          <div className="form-control">
            <label htmlFor="text">Hasta Bilgileri</label>
            <input
              id="text"
              type="text"
              onChange={(e)=>setHastaName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
              onChange={(e)=>setTarih(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="kayit btn-submit">
              <span style={{color: "#6a0707"}} > dr un adi </span> icin kayit olustur
            </button>
          </div>
        </form>
    </div>
  )
}

export default AddPatient
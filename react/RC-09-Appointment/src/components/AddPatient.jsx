import React from 'react'

const AddPatient = () => {
  return (
    <div>
                <form>
          <div className="form-control">
            <label htmlFor="text">Hasta Bilgileri</label>
            <input
              id="text"
              type="text"
            />
          </div>
          <div className="form-control">
            <label htmlFor="day">Day & Time</label>
            <input
              id="day"
              type="datetime-local"
            />
          </div>
          <div>
            <button className="kayit btn-submit" type="submit">
              <span style={{color: "#6a0707"}} > dr un adi </span> icin kayit olustur
            </button>
          </div>
        </form>
    </div>
  )
}

export default AddPatient
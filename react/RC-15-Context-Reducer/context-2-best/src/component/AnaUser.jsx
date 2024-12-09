import React, { useContext } from 'react'
import { KullaniciContext } from '../context/KullaniciProvider'

const AnaUser = () => {

    const{users}=useContext(KullaniciContext)

  return (
    <div>
        {}
    </div>
  )
}

export default AnaUser
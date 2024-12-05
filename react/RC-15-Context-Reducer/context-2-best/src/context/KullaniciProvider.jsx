import React, { createContext } from 'react'

//! 1- create context

export const KullaniciContext=createContext()

const KullaniciProvider = ({children}) => {


        fetch("https://api.github.com/users")
          .then((res) => res.json())
          .then((veri) => console.log(veri));
      


  return (
    //! 2- context alanı ile sarmallayarak çocuklara veri gönderilebilir demiş olduk:

    <KullaniciContext.Provider>
      {children}
    </KullaniciContext.Provider>
  )
}

export default KullaniciProvider
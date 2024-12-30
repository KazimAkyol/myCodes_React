import React from "react";
// mutfak

const ilkDeger = {
  gorevler: [
    { id: 1, yapilacak: "Redux calisiyoruz", bittiMi: false },
    { id: 2, yapilacak: "Köpekleri gezdir", bittiMi: true },
  ],
};

const todoReducer = (state = ilkDeger, { type, payload }) => {
  switch (type) {
    case "EKLE":
      return {
        gorevler: [
          ...state.gorevler,
          { id: 3, yapilacak: payload, bittiMi: false },
        ],
      };

    default:
      break;
  }
};

export default todoReducer;

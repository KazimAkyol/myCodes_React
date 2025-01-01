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

    case "SIL":
      return { gorevler: state.gorevler.filter((olay) => olay !== payload) };

    case "CHANGE":
      return {
        gorevler: state.gorevler.map((a) =>
          a.id === payload ? { ...a, bittiMi: !a.bittiMi } : a
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;

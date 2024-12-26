import React from "react";

const ilkDeger = {
  gorevler: [
    { id: 1, yapilacak: "Redux calisiyoruz", bittiMi: false },
    { id: 2, yapilacak: "Köpekleri gezdir", bittiMi: true },
  ],
};

const todoReducer = (state = ilkDeger, { type, payload }) => {};

export default todoReducer;

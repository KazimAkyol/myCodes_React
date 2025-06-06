import React from "react";

const HoverFocus = () => {
  return (
    <div>
      <h3 className="text-center bg-purple-400 mt-3 py-3">
        Hover and Focus - Peer Özelligi
      </h3>
      <p>Hover özelligi bolca kullanilmis hali:</p>
      <button className="bg-rose-500 px-16 py-4 rounded-tr-2xl m-4 text-white hover:drop-shadow-2xl hover:border-2 hover:border-gray-400 hover:bg-rose-300">
        Save
      </button>

      <p>Focus Özelliigi</p>
      <input
        type="text"
        className="border-2 rounded-2xl text-xl ml-2 text-center focus:outline-rose-500 focus:bg-slate-400"
      />

      <p>Peer Özelligi</p>
      <input
        type="email"
        className="peer border-2 rounded-2xl text-xl ml-2 text-center focus:outline-rose-500 focus:bg-slate-400"
      />
      <p className="text-red-700 ml-4 invisible peer-invalid:visible">
        Invalid email adress
      </p>

      <input type="checkbox" className="peer" />
      <p className="peer-checked:bg-green-400">Tiklandi</p>
    </div>
  );
};

export default HoverFocus;

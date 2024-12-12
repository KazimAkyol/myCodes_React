import React from "react";

const Sizing = () => {
  return (
    <div>
      <h4 className="bg-blue-400 text-center">Spacing and Sizing</h4>
      <p className="text-lg underline text-opacity-60 text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quas
        explicabo consequuntur molestias dolorum, dignissimos quidem eaque
        repudiandae itaque aut doloremque unde ipsam harum dolores ratione
        asperiores ipsum alias corporis a. Aut adipisci fugiat placeat cum
        deserunt aliquid sed minima quaerat, nihil saepe fuga earum!
      </p>

      <div>
        <p className="bg-yellow-600 mt-5">Margin</p>
        <button className="bg-lime-600 m-4 p-2">Tikla</button>
        <button className="bg-orange-400 mt-4 ml-6 pl-5 pr-8 pt-3 pb-1">
          Tikla
        </button>
        <button className="bg-blue-600 mx-7 my-10 px-20 py-5">Tikla</button>
      </div>

      <div>
        <p className="bg-yellow-600 mt-5">Border - Border radius</p>
        <button className="bg-lime-600 m-4 p-2 border-[0.5rem] border-red">
          Tikla
        </button>
        <button className="bg-slate-500 m-4 p-2 border-[0.5rem] border-blue-200 rounded-2xl">
          Tikla
        </button>
        <button className="bg-yellow-400 m-4 p-2 border-[0.5rem] border-blue-200 rounded-br-2xl">
          Tikla
        </button>
        <button className="bg-yellow-200 m-4 p-2 border-[0.5rem] border-blue-200 rounded-[50%] hover:bg-slate-500">
          Tikla
        </button>
      </div>
    </div>
  );
};

export default Sizing;

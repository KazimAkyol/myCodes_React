import { useState } from "react";



const TodoInput = () => {
    // inputtan gelen veriyi taşıması için useState:
    const [inputVeri, setInput] = useState("")



     // submit fonksiyonu reducers dan gelsin:



  return (
    <form >
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"

      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;

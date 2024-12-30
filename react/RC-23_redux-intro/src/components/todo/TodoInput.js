import { useState } from "react";



const TodoInput = () => {
    // inputtan gelen veriyi taşıması için useState:
    const [inputVeri, setInput] = useState("")



     // submit fonksiyonu reducers dan gelsin:
const handleSubmit=(e)=>{
    e.preventDefault()
}


  return (
    <form onSubmit={handleSubmit} >
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        onChange={(e)=>setInput(e.target.value)}

      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;

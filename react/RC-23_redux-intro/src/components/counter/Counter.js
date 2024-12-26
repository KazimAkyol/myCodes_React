import { useSelector } from "react-redux";
import "./Counter.css";

const Counter = () => {
  // değişkenler useSelector hookuyla getirilir:

  return (
    <div className="app">
      <h2 className="counter-header"> Counter with Redux</h2>
      <h1></h1>
      {/* sayac */}
      <h2></h2>
      {/* yazi */}
      <div>
        <button
          className="counter-button positive"
          // arttır fonksiyonu
        >
          ARTTIR
        </button>

        <button
          className="counter-button zero"
          // sıfırla fonksiyonu
        >
          RESET
        </button>
        <button
          className="counter-button negative"
          // azaltıldı fonksiyonu
        >
          AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;

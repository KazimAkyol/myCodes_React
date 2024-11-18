import { Component } from "react";

//* ====================== CLASS COMPONENTS AND STATE ======================
//* React'taki Class-Components ES6 class yapısını temel alır. Cok fazla boilerplate(karisik) code'a sahipler. Fakat, state'lere sahip olabilirler.
//* State component hakkında data veya bilgi içermek için kullanılan yerleşik bir React objectidir. Component'in durumu zamanla değişebilir;
//* Ne zaman değişse component re-render olur.
//* this.state ile constructor'da state için bir initial value atayabiliriz. Constructor  dışında, state'i setState() metoduyla değiştirebiliriz.
//* =========================================================================

class Counter extends Component {
  constructor(props) {
    super(props);

    //! state'e baslangic degerleri atadik
    this.state = {
      sayac: 0,
      baslik: "merhaba",
      kisi: { isim: "muhterem", meslek: "developer" },
    };
  }

  arttir() {
    this.setState({ sayac: this.state.sayac + 1 });

    this.setState({ baslik: "HALLO" });
  }

  //! burada arrow function tercih ettiğimiz için button kısmında fonksiyonu bind etmeye gerek kalmadı.
  azalt = () => {
    this.setState({ sayac: this.state.sayac - 1 });
  };

  render() {
    return (
      <div className="text-center">
        <h1>SAYAC:{this.state.sayac}</h1>
        <h2>{this.state.baslik}</h2>

        <button onClick={this.arttir.bind(this)} className="btn btn-primary">
          ARTTIR
        </button>
        <button onClick={this.azalt} className="btn btn-danger">
          AZALT
        </button>
      </div>
    );
  }
}

export default Counter;

// React'te bileşenlerin iki kez render edilmesi, genellikle React Strict Mode kullanıldığında görülen bir durumdur. Bu davranış, React'in geliştirme modunda belirli işlemleri iki kez çalıştırarak potansiyel sorunları tespit etmesine olanak tanır. Bu durum, production (yayınlama) modunda meydana gelmez.

// LifeCycle Methods
// ComponentDidMount
// ComponentDidUpdate
// ComponentWillUnmount

import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("state oluştur. Constructor çalişti");
    this.state = {
      count: 0,
    };
  }

  //! Component DOM'a yerleştiğinde çalışır. API çağrıları veya başlangıç işlevlerini burada yapabilirsiniz.

  componentDidMount() {
    console.log("component Dom'a yerlesti");
  }

  componentDidUpdate() {
    console.log("Update calisti");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="mt-2">
        return <h3>Count:{this.state.count}</h3>
        <button onClick={() => this.increment()}>ARTTIR</button>
      </div>
    );
  }
}

export default LifeCycle;

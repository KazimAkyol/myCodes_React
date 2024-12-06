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

  render() {
    return <h3>Count:{this.state.count}</h3>;
  }
}

export default LifeCycle;

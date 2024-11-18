import {Component} from 'react'

//* ====================== CLASS COMPONENTS AND STATE ======================
//* React'taki Class-Components ES6 class yapısını temel alır. Cok fazla boilerplate(karisik) code'a sahipler. Fakat, state'lere sahip olabilirler.
//* State component hakkında data veya bilgi içermek için kullanılan yerleşik bir React objectidir. Component'in durumu zamanla değişebilir;
//* Ne zaman değişse component re-render olur.
//* this.state ile constructor'da state için bir initial value atayabiliriz. Constructor  dışında, state'i setState() metoduyla değiştirebiliriz.
//* =========================================================================

class Counter extends Component {
  
    constructor(props){
        super(props)
        this.state={sayac:0, baslik:"merhaba", kisi: {} }
    }
}

export default Counter
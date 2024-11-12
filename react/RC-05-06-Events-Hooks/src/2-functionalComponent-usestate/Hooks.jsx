import React from 'react'

//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza olanak saglayan özel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in kullanimini cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in Hook bulunmaktadir. Ayrica custom hook tanimlamak da mümkündür.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar üst seviyede tanimlanmalidir. Yani Hook'lar bir döngünün, kosul cümleciginin ve ic ice fonksiyonlarin icerisinde kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir. Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

const Hooks = () => {
  return (
    <div>Hooks</div>
  )
}

export default Hooks
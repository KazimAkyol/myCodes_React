import React, { useState } from "react";

//! JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcuttur.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute'ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX'de JavaScript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılar da dahil.

const Form = () => {
  const [isim, setIsim] = useState("");
  const [pass, setPass] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="container text-center mt-4">
      <h1>*********************************************</h1>

      <h1>FORM(EVENTS)</h1>

      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="isim">
            NAME: <span className="text-danger"> </span>
          </label>
          <input className="form-control" id="isim" type="text" 
          onInput={(e)=>setIsim(e.target.value)}
           />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input className="form-control" id="password" type="password" />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="country">
            COUNTRY: <span className="text-danger"> </span>
          </label>
          <select className="form-select">
            <option selected>COUNTRIES</option>
            <option value="Türkiye">TURKEY</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          GÖNDER (submit)
        </button>
      </form>
    </div>
  );
};

export default Form;

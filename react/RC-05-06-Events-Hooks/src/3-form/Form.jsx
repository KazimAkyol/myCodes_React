import React from 'react'

//! JSX ile HTML arasında çok fazla fark olmamakla birlikte bazı önemli farklar da mevcuttur.
//! HTML'de class olarak tanımlanan nitelik JSX'de className olarak tanımlanmalı.
//! HTML'de tek kelime olmayan tabindex gibi nitelikler JSX'de camelCase yapısına uygun olarak tabIndex şeklinde dönüştürülür.
//! HTML'de onclick, onchange gibi nitelikler yukarıdaki camelCase örneğine göre onClick, onChange şeklinde dönüştürülür.
//! HTML'de label etiketinde belirtilen for attribute'ü JSX'de htmlFor olarak tanımlanmalı.
//! HTML'de value niteliği JSX'de defaultValue olarak tanımlanmalı.
//! Ayrıca JSX'de JavaScript ifadeleri {} içinde çalıştırılabilir. Buna map, && gibi yapılar da dahil.

const Form = () => {
  return (
    <div>Form</div>
  )
}

export default Form
import React, { useEffect, useState } from "react";

const People = () => {
  const [user, setUser] = useState([]);

  //! fetch işlemini bu şekilde ortada yaparsak, state her değişimde güncellendiğinden sonsuz döngüye girer. O nedenle bu şekilde kullanmıyoruz. Apiden veri almayı o nedenle useEffect içinde yapıyoruz.

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((veri) => setUser(veri));
  }, []);

  console.log(user);

  return <div>People</div>;
};

export default People;

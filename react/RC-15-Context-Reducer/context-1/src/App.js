import React, { createContext, useState } from "react";
import Home from "./components/Home";
import data from "./data";

//! 1-context alani aciyoruz
export const StudentContext = createContext();

const App = () => {
  const [students, setStudents] = useState(data);

  return (
    //! 2- Bütün projeye gönderilebilsin diye ilk olarak Home  sayfasını, gönderilecek verilerle ve context'le sarmallayalım:
    <div>
      <Home />
    </div>
  );
};

export default App;

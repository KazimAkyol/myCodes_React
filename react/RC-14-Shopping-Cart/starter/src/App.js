import React from "react";
import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
// bootstrap in script teşekkürü linkini isHtmlElement, fontAwesome ın teşekkür linkini index.html ye ekledik.

function App() {

  

  return (
    <div className="bg-light app">
      <Navbar/>
      <Main/>
      <About/>
      <NewProduct/>
      <ProductList/>
    </div>
  );
}

export default App;

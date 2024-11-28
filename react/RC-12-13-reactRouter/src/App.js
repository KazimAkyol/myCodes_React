import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import CourseCard from "./pages/CourseCard";
import ContactForm from "./pages/ContactForm";
import Paths from "./pages/Paths";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        {/* demirbaslar yani her daim görünecek componentler Router ve Routes etiketinin icine yazilir */}
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/paths" element={<Paths />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

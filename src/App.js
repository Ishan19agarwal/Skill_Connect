import React from "react";
import Navbar from "./components/navbar";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hero from "./components/Hero";
import AboutUs from "./components/Aboutus";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";
import DonorForm from "./components/donorpage";
import UploadPage from "./components/upload";
import Dashboard from "./components/dashboard";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/donorpage' element={<DonorForm />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/upload' element={<UploadPage />}></Route>
        </Routes>
      </Router>
      <Hero />
      <AboutUs />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;

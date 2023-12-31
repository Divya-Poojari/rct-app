import React from "react";
// import Header from "./Components/Header";
// import Body from "./Components/Body";
// import Footer from "./Components/Footer";


import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route element={<Home/>} path="/Home" />
    <Route element={<About/>} path="/about" />
    <Route element={<Contact/>} path="/contact" />
    <Route element={<Login/>} path="/login" />
    <Route element={<Signup/>} path="/Signup" />
  </Routes>
</BrowserRouter>
    </>
  );
};

export default App;
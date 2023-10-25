import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbars from "./Components/Navbars";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Privacy from "./Components/Privacy";
import Admission from "./Components/Admission";
import Gallery from "./Components/Gallery";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/legal/privacy" element={<Privacy />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

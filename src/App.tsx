import React from "react";
import logo from "./assets/img/logo-dark.png";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { CarPage, Homepage, Login } from "./pages";


import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cars" element={<CarPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

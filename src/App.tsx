import React from "react";
import { Footer, Navbar, Search } from "./components";
import { Route, Routes } from "react-router-dom";
import { CarPage, Homepage, Login, BrandPage } from "./pages";


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
          <Route path="/brands" element={<BrandPage />} />
        </Routes>
      </main>
      <Search />
      <Footer />
    </>
  );
}

export default App;

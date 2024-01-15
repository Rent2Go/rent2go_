import React from "react";
import { Auction, Footer, Navbar, Review, Search, Sellers, Trending } from "./components";
import { Route, Routes } from "react-router-dom";
import { CarPage, HomePage, Login, Register, BrandPage } from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/brands" element={<BrandPage />} />
        </Routes>
      </main>
      <Search />
      <Trending />
      <Sellers />
      <Auction />
      <Review />
      <Footer />
    </>
  );
}

export default App;

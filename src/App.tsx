import React from "react";
import { Auction, Footer, Navbar, Review, Search, Sellers, Trending } from "./components";
import { Route, Routes } from "react-router-dom";
import { CarPage, HomePage, Login, BrandPage } from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
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

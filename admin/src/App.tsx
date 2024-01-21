import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register, CarList } from "./pages";
import { Footer, Navbar, Sidebar } from "./components";
import { FiSettings } from "react-icons/fi";

import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/cars" element={<CarList />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

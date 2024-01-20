import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard, Login, Register, CarList } from "./pages";

import "./App.css";
function App() {
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
}

export default App;

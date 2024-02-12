import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"
import { store } from "./store/store";
import { Provider } from "react-redux";

import "./index.css";




const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
  
);
root.render(
  <Provider store={store}>
  <AuthProvider >
    <BrowserRouter>
      <App />
    
    </BrowserRouter>
  </AuthProvider>
  </Provider>
);

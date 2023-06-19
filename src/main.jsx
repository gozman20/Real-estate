import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import HouseContextProvider from "./components/HouseContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HouseContextProvider>
        <App />
      </HouseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

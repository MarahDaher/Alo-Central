import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n/i18n";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

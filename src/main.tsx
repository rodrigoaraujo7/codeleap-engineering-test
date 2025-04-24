import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}  />

        <Route path="sign-in" element={<h1>Sign in</h1>}  />
        
        <Route path="*" element={<h1>page not found</h1>}  />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

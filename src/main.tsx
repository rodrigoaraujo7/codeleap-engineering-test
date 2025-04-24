import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { SignIn } from "./pages/SignIn";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<h1 className="text-5xl">Home page</h1>}  />

        <Route path="sign-in" element={<SignIn />}  />
        
        <Route path="*" element={<h1>page not found</h1>}  />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

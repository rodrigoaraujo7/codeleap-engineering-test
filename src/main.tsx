import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global.css";

import { BrowserRouter, Route, Routes } from "react-router";

import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { AuthProvider } from "./store/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="sign-in" element={<SignIn />} />

          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);

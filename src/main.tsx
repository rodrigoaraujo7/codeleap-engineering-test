import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global.css";

import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes";

import { AuthProvider } from "./store/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

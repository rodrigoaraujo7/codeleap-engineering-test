import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./global.css";

import { BrowserRouter } from "react-router";
import { AppRouter } from "./routes";

import { AuthProvider } from "./store/AuthProvider";
import { Flip, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />

        <ToastContainer
          position='top-right'
          autoClose={2000} // time in ms
          closeOnClick
          pauseOnHover
          transition={Flip}
        />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);

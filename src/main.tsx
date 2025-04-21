import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import App from "./App";

import "./styles/index.css";
import "./styles/themes/index.css";
import "./styles/elements.css";
import "./styles/mq/desktop.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);

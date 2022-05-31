import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { serverMock } from "./http/mock/server";
import { GlobalStyle } from "./styles/global";

serverMock(); //Mock server

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);

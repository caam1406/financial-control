import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { UseSharedTransaction } from "./context/transactionContext";
import { serverMock } from "./http/mock/server";
import { GlobalStyle } from "./styles/global";

serverMock(); //Mock server

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UseSharedTransaction>
      <App />
    </UseSharedTransaction>
    <GlobalStyle />
  </React.StrictMode>
);

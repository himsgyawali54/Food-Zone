import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextApi from "./context/ContextApi.jsx";
import { Provider } from "react-redux";
import store from "./Store/appStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextApi>
        <App />
      </ContextApi>
    </Provider>
  </React.StrictMode>
);

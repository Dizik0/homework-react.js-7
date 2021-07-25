import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <PersistGate loading={null} persistor={store}> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

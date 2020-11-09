import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import NavBar from "./containers/NavBar";
import Router from "./router";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

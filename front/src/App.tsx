import React, { Component, ReactNode } from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { history } from "./lib/history";
import { Routes } from "./Routes";

export class App extends Component {
  public render(): ReactNode {
    return (
      <>
        <Router history={history}>
          <Routes />
        </Router>
        <ToastContainer
          newestOnTop={true}
          closeButton={false}
          hideProgressBar={true}
        />
      </>
    );
  }
}

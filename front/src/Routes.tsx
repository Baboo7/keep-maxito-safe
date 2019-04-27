import React, { PureComponent, ReactNode } from "react";
import { Route, Switch } from "react-router-dom";
import { Alert } from "./pages/Alert";

export class Routes extends PureComponent {
  public render(): ReactNode {
    return (
      <Switch>
        <Route component={Alert} />
      </Switch>
    );
  }
}

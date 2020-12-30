import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import RootRouter from "./router/RootRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RootRouter />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

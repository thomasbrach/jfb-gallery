import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";
import { fetchPaintings } from "./redux/paintings/paintings.actions";
import RootRouter from "./router/RootRouter";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPaintings());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <RootRouter />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

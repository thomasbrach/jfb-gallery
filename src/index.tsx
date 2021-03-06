import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { customTheme } from "./common/theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

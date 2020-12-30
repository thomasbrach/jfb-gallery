import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

import rootReducer from "./root.reducer";

const middlewares = [thunk, logger];

// if (process.env.NODE_ENV === "production") {
//   middlewares.splice(middlewares.indexOf(logger));
// }

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

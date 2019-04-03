import { createStore, compose, applyMiddleware } from "redux";
import { tvmazeFetchmiddleware, execTime } from "./middlewares";
import rootReduser from "./reducers";

const createAppStore = () => {
  const store = createStore(
    rootReduser,
    compose(
      applyMiddleware(tvmazeFetchmiddleware),
      applyMiddleware(execTime),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
};

export default createAppStore;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { TodoActionTypes } from "./types/todo";

const initialState = {};

export type AppState = ReturnType<typeof rootReducer>;

const middleware = [thunk as ThunkMiddleware<AppState, TodoActionTypes>];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

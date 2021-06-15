import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import RootReducer from "./Root-reducer";

const middlewares =[]
const store = createStore(RootReducer,applyMiddleware(...middlewares))

export default store;
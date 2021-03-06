import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import "./styles/app.css";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReduer";
import logger from "redux-logger";

const store = createStore(
    rootReducer,
    applyMiddleware(logger,thunk)
)

ReactDom.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StateType, StoreType,} from "./redax/state";
import reportWebVitals from "./reportWebVitals";
import {store} from "./redax/state";

export let callSubscriber: (state:StateType) => void = (state) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById("root"));
};
callSubscriber(store.getState());
store.subscribe(callSubscriber);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

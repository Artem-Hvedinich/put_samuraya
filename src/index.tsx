import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {StoreType,} from "./redax/state";
import reportWebVitals from "./reportWebVitals";
import {store} from "./redax/state";

export let rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <App store={store} addPost={store.addPost} updateNewPostText={store.updateNewPostText}/>,
        document.getElementById("root"));
};
rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

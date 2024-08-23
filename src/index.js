import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import store from '@redux/store.js';

import "./base/style.scss";

import App from "./components/App/App.jsx";

var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, mountNode
);

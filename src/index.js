import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

import "./base/styles.scss";


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="lox" />, mountNode);
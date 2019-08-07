import React from "react";
import ReactDOM from "react-dom";
import ShowSlide from "./App";
import LanguageConteiner from "./LanguageCont";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";

function renderShowSlide() {
  ReactDOM.render(<LanguageConteiner />, document.getElementById("liAniStyle"));
  ReactDOM.render(<ShowSlide />, document.getElementById("content"));
}
window.onload = function() {
  renderShowSlide();
};
export default renderShowSlide;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

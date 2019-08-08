import React from "react";
import ReactDOM from "react-dom";
import ShowSlide from "./App";
import Footer from "./Footer";
import * as serviceWorker from "./serviceWorker";
import "./styles.css";

let aniStyle = "fade";
let changeAnimationStyle = () => {
  aniStyle == "fade" ? (aniStyle = "toSide") : (aniStyle = "fade");
  renderShowSlide();
};

function renderShowSlide() {
  ReactDOM.render(
    <>
      <div className="content">
        <ShowSlide aniStyle={aniStyle} />
      </div>
      <Footer aniStyle={aniStyle} changeAnimationStyle={changeAnimationStyle} />
    </>,
    document.getElementById("root")
  );
  return 0;
}
window.onload = function() {
  renderShowSlide();
};
export default renderShowSlide;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

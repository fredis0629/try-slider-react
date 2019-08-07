import React from "react";

let animMode = "fade";

function changeAnimationStyle() {
  if (animMode == "fade") {
    animMode = "toSide";
  } else {
    animMode = "fade";
  }
  window.aniStyle.innerHTML = animMode;
}

class LanguageConteiner extends React.Component {
  render() {
    return (
      <a id="aniStyle" onClick={changeAnimationStyle}>
        fade
      </a>
    );
  }
}

export default LanguageConteiner;

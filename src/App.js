import React from "react";
import data from "./data.js";
import renderShowSlide from "./index.js";

const state = {
  indexPrev: 0,
  index: 1
};
const animClassList = {
  fade: {
    show: "fade",
    hide: "fadeHide"
  },
  toSide: {
    show: "toSide",
    hide: "toSideHide"
  }
};

function switchSlides(event) {
  let n = event.target.className == "next" ? 1 : -1;
  setState({ indexPrev: state.index, index: (state.index + n) % data.length });
  if (state.index < 0) {
    setState({ indexPrev: state.index, index: data.length - 1 });
  }
  renderShowSlide();
}
function curentSlide(index) {
  if (index != state.index) setState({ indexPrev: state.index, index: index });
  renderShowSlide();
}
function setState(newState) {
  Object.assign(state, newState);
}

class ShowSlide extends React.Component {
  render() {
    let animMode = this.props.aniStyle;
    function direction() {
      let result = {};
      if (animMode == "toSide") {
        if (state.indexPrev < state.index) {
          Object.assign(result, {
            hide: {
              "-webkit-animation-name": "toSideHideLeft",
              "animation-name": "toSideHideLeft"
            },
            show: {
              "-webkit-animation-name": "toSideLeft",
              "animation-name": "toSideLeft"
            }
          });
        } else {
          Object.assign(result, {
            hide: {
              "-webkit-animation-name": "toSideHideRight",
              "animation-name": "toSideHideRight"
            },
            show: {
              "-webkit-animation-name": "toSideRight",
              "animation-name": "toSideRight"
            }
          });
        }
      } else {
        Object.assign(result, {
          hide: {
            "-webkit-animation-name": "",
            "animation-name": ""
          },
          show: {
            "-webkit-animation-name": "",
            "animation-name": ""
          }
        });
      }
      console.log(result);

      return result;
    }
    return (
      <div>
        <div id="slideConteiner" className="slide-conteiner">
          {data.map((item, index) => {
            let animationClass = index == state.index ? animClassList[animMode].show : animClassList[animMode].hide;
            let direct = direction();
            let animationStyle = index == state.index ? direct.show : direct.hide;
            return (
              <div className={`slides ${animationClass}`} style={animationStyle}>
                <img src={item.src} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <a className="pref" onClick={switchSlides}>
          {" "}
          &#10094;
        </a>
        <a className="next" onClick={switchSlides}>
          &#10095;
        </a>
        <br />
        <div className="dots">
          {data.map((item, index) => {
            let activeDot = index == state.index ? "active" : "";
            return <span className={`dot ${activeDot}`} onClick={() => curentSlide(index)} />;
          })}
        </div>
      </div>
    );
  }
}

export default ShowSlide;

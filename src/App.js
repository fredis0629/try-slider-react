import React from "react";
import data from "./data.js";
import Footer from "./Footer";
import styled from "styled-components";

const Slide = styled.div`
  position: absolute;
  width: max-content;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  opacity: ${props => (props.isCurent ? 1 : 0)};
  animation-duration: 1.5s;
  animation-name: ${props => props.aniNameSee(props.isCurent, props.isPref)};
`;
class ShowSlide extends React.Component {
  state = {
    indexPrev: 0,
    index: 1,
    animMode: "toFade"
  };
  changeAnimationStyle = () => {
    this.setState(cur => ({ animMode: cur.animMode === "toFade" ? "toSide" : "toFade" }));
  };
  switchSlides = event => {
    let n = event.target.className === "next" ? 1 : -1;
    this.setState(cur => ({
      indexPrev: cur.index,
      index: cur.index + n >= 0 ? (cur.index + n) % data.length : data.length - 1
    }));
  };
  curentSlide(index) {
    if (index !== this.state.index) this.setState({ indexPrev: this.state.index, index: index });
  }
  aniNameSee = (isCurent, isPref) => {
    let result = "";
    if (isCurent || isPref) {
      if (this.state.animMode === "toFade") {
        result = "toFade";
      } else if (this.state.indexPrev < this.state.index) {
        result = "toSideLeft";
      } else {
        result = "toSideRight";
      }
      result += isCurent ? "" : "Hide";
    }
    return result;
  };
  render() {
    return (
      <>
        <div className="content">
          <div id="slideConteiner" className="slide-conteiner">
            {data.map((item, index) => {
              return (
                <Slide key={item.src} isCurent={index === this.state.index} isPref={index === this.state.indexPrev} aniNameSee={this.aniNameSee}>
                  <img src={item.src} style={{ width: "100%" }} />
                </Slide>
              );
            })}
          </div>
          <a className="pref" onClick={this.switchSlides}>
            {" "}
            &#10094;
          </a>
          <a className="next" onClick={this.switchSlides}>
            &#10095;
          </a>
          <br />
          <div className="dots">
            {data.map((item, index) => {
              let activeDot = index === this.state.index ? "active" : "";
              return <span key={item.src} className={`dot ${activeDot}`} onClick={() => this.curentSlide(index)} />;
            })}
          </div>
        </div>
        <Footer aniStyle={this.state.animMode} changeAnimationStyle={this.changeAnimationStyle} />
      </>
    );
  }
}

export default ShowSlide;

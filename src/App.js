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

const UlFooterComponent = styled.ul`
  flex-grow: 1;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  padding: 0;
  justify-content: flex-end;
  height: inherit;
  @media (max-width: 700px) {
    z-index: 7;
    flex-direction: column;
    list-style-type: none;
    display: ${props => (props.isShowToggle ? "flex" : "none")};
    position: absolute;
    background-color: #000;
    height: 290px;
    bottom: 70px;
    right: 0;
    & li a {
      line-height: 58px;
    }
  }
`;
const SpanFooterBurger = styled.span`
  height: 70px;
  cursor: pointer;
  padding: 2vw;
  font-size: 26px;
  border: none;
  padding: 0;
  display: none;
  justify-content: right;
  align-items: center;
  & a {
    color: #fff;
  }
  @media (max-width: 700px) {
    display: flex;
  }
`;

class ShowSlide extends React.Component {
  state = {
    indexPrev: 0,
    index: 1,
    animMode: "toFade",
    isShowToggle: true
  };
  componentDidMount = () => {
    window.addEventListener("resize", this.setState({ isShowToggle: document.innerWidth > 500 }));
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
  toggleMenu = () => {
    this.setState(cur => (cur.isShowToggle = !cur.isShowToggle));
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
        <Footer
          aniStyle={this.state.animMode}
          changeAnimationStyle={this.changeAnimationStyle}
          isShowToggle={this.state.isShowToggle}
          toggleMenu={this.toggleMenu}
          UlFooterComponent={UlFooterComponent}
          SpanFooterBurger={SpanFooterBurger}
        />
      </>
    );
  }
}

export default ShowSlide;

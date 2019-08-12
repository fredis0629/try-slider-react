import React from "react";
import AnimationChangeContainer from "./animationChangeContainer";
import backgroundF from "./images/bg.png";
import logo from "./images/LS-logo.svg";
import logoBe from "./images/behance-logo.svg";
import logoInst from "./images/instagram.svg";
import { thisExpression } from "@babel/types";

class Footer extends React.Component {
  render() {
    return (
      <footer style={{ background: `url(${backgroundF})`, backgroundSize: "100% 100%" }}>
        <div className="divLogo">
          <img src={logo} className="logo" />
        </div>
        <nav>
          <this.props.SpanFooterBurger>
            <a onClick={this.props.toggleMenu} className="toggle-link">
              ☰
            </a>
          </this.props.SpanFooterBurger>
          <this.props.UlFooterComponent isShowToggle={this.props.isShowToggle}>
            <li>
              <AnimationChangeContainer aniStyle={this.props.aniStyle} changeAnimationStyle={this.props.changeAnimationStyle} />
            </li>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">prices</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
            <li>
              <a href="#">EN</a>
            </li>
          </this.props.UlFooterComponent>
        </nav>
        <div className="divBe">
          <a href="#">
            <img src={logoBe} className="be" />
          </a>
        </div>
        <div className="divInst">
          <a href="#">
            <img src={logoInst} className="inst" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;

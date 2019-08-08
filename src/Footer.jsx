import React from "react";
import LanguageConteiner from "./LanguageCont";
import backgroundF from "./images/bg.png";
import logo from "./images/LS-logo.svg";
import logoBe from "./images/behance-logo.svg";
import logoInst from "./images/instagram.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer style={{ background: `url(${backgroundF})`, backgroundSize: "100% 100%" }}>
        <div class="divLogo">
          <img src={logo} class="logo" />
        </div>
        <nav>
          <span class="navbar-toggle">
            <a onclick="manageNavbar()" class="toggle-link">
              ☰
            </a>
          </span>
          <ul>
            <li id="liAniStyle">
              <LanguageConteiner aniStyle={this.props.aniStyle} changeAnimationStyle={this.props.changeAnimationStyle} />
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
          </ul>
        </nav>
        <div class="divBe">
          <a href="#">
            <img src={logoBe} class="be" />
          </a>
        </div>
        <div class="divInst">
          <a href="#">
            <img src={logoInst} class="inst" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;

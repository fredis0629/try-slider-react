import React from "react";
import LanguageConteiner from "./LanguageCont";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="divLogo">
          <img src="./images/LS-logo.svg" class="logo" />
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
            <img src="./images/behance-logo.svg" class="be" />
          </a>
        </div>
        <div class="divInst">
          <a href="#">
            <img src="./images/instagram.svg" class="inst" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;

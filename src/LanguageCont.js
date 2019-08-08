import React from "react";

class LanguageConteiner extends React.Component {
  render() {
    return (
      <a id="aniStyle" onClick={this.props.changeAnimationStyle}>
        {this.props.aniStyle}
      </a>
    );
  }
}

export default LanguageConteiner;

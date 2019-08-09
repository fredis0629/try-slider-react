import React from "react";

class AnimationChangeContainer extends React.Component {
  render() {
    return (
      <a id="aniStyle" onClick={this.props.changeAnimationStyle}>
        {this.props.aniStyle}
      </a>
    );
  }
}

export default AnimationChangeContainer;

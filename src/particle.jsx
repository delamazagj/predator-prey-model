import React, { Component } from "react";
import Particles from "react-particles-js";

const partOptions = {
  particles: {
    number: {
      value: 150,

      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#D3D3D3"
    },

    line_linked: {
      enable: true,
      color: "#D3D3D3"
    }
  }
};

const styl = {
  position: "absolute",
  top: "15%",

  // transform: "translate(-50%, -50%)",
  maxWidth: "100%",
  maxHeight: "100%",
  minWidth: "75%",
  minHeight: "40%",
  width: "auto",
  height: "auto",
  zIndex: "1",
  left: "12%"
};

class Background extends Component {
  render() {
    return (
      <div style={styl}>
        <Particles params={partOptions} />
      </div>
    );
  }
}

export default Background;

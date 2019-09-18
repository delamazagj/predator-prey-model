import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

class Horizontal extends Component {
  /*constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10
    };
  }

  handleChangeStart = value => {
    console.log("Change event started");
    this.setState({
      value: value
    });
  };

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  handleChangeComplete = value => {
    console.log("Change event completed");
    this.setState({
      value: value
    });
  };*/

  render() {
    let {
      value,
      handleChangeStart,
      handleChange,
      handleChangeComplete
    } = this.props;
    return (
      <div className="slider">
        <div className="value">Predator Effectiveness -> {value}</div>
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={handleChangeStart}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    );
  }
}

export default Horizontal;

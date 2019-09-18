import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class FormSample extends Component {
  //let Ainitial = "";

  schema = {};

  Ainput = e => {
    this.props.handleAInput(e.target.value);
    //console.log(e.target.value);
  };

  Binput = e => {
    this.props.handleBInput(e.target.value);
    //console.log(e.target.value);
  };

  Adeath = e => {
    this.props.handleADeath(e.target.value);
    //console.log(e.target.value);
  };

  Bdeath = e => {
    this.props.handleBDeath(e.target.value);
    //console.log(e.target.value);
  };

  Agrowth = e => {
    this.props.handleAGrowth(e.target.value);
    //console.log(e.target.value);
  };

  Bgrowth = e => {
    this.props.handleBGrowth(e.target.value);
    //console.log(e.target.value);
  };

  handleForm = e => {
    this.props.handleOnSubmit(e);
    //console.log(this.Ainitial);
    //console.log(e);
  };
  render() {
    //let { handleOnSubmit } = this.props;
    return (
      <div>
        <Form onSubmit={this.handleForm}>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Predator Initial Population"
              placeholder="Predator Initial Population"
              onChange={this.Ainput}
            />
            <Form.Input
              label="Prey Initial Population"
              placeholder="Prey Initial Population"
              onChange={this.Binput}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Predator Growth Rate"
              placeholder="Predator Growth Rate"
              onChange={this.Agrowth}
            />
            <Form.Input
              label="Prey Growth Rate"
              placeholder="Prey Growth Rate"
              onChange={this.Bgrowth}
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Predator Death Rate"
              placeholder="Predator Death Rate"
              onChange={this.Adeath}
            />
            <Form.Input
              label="Prey Death Rate"
              placeholder="Prey Death Rate"
              onChange={this.Bdeath}
            />
          </Form.Group>
          <Button style={{ background: "black", color: "white" }} type="submit">
            Generate
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormSample;

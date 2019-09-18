import React, { Component } from "react";
import Chart from "./chart.js";
import "./App.css";
import Background from "./particle.jsx";
//import Test from "./test.jsx";
import FormSample from "./form.jsx";
import Horizontal from "./test.jsx";
import { Grid } from "semantic-ui-react";
import TableSample from "./Table";

//const background = ;
const styl = {
  background: "linear-gradient(to right, rgb(203, 52, 181), rgb(68, 166, 187))",
  //position: "relative",
  // width: "100%",
  // height: "100%",
  backgroundAttachment: "fixed"
  /*padding: "0",
  margin: "0"*/
};

const styl2 = {
  width: "100%",
  height: "100%",
  padding: "0",
  margin: "0px"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ind: 0,
      pr0: [],
      pr1: [],
      value: 50,
      Ainitial: "",
      Binitial: "",
      Adeath: "",
      Bdeath: "",
      Agrowth: "",
      Bgrowth: "",
      show: false,
      data: {
        //fontColor: "#fff",
        labels: [
          " ",
          "Gen1",
          " ",
          "Gen2",
          " ",
          "Gen3",
          " ",
          "Gen4",
          " ",
          "Gen5",
          " ",
          "Gen6",
          " ",
          "Gen7",
          " ",
          "Gen8",
          " ",
          "Gen9",
          " ",
          "Gen10"
        ],
        datasets: [
          {
            label: "Prey",
            // color: "black",
            //fontColor: "#fff",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "round",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            cubicInterpolationMode: "monotone",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },

          {
            label: "Predator",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(255,255,255,255)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "round",
            pointBorderColor: "rgba(255,255,255,255)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            cubicInterpolationMode: "monotone",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      }
    };
  }
  handleChangeStart = () => {
    console.log("Change event started");
    /*this.setState({
      value: value
    });*/
  };

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  handleBGrowth = e => {
    //console.log(e);

    this.setState(
      {
        Bgrowth: e
      },
      () => {
        console.log("B-Growth -> " + this.state.Bgrowth);
      }
    );
  };
  handleAGrowth = e => {
    //console.log(e);

    this.setState(
      {
        Agrowth: e
      },
      () => {
        console.log("A-Growth -> " + this.state.Agrowth);
      }
    );
  };

  handleBDeath = e => {
    //console.log(e);

    this.setState(
      {
        Bdeath: e
      },
      () => {
        console.log("B-Death -> " + this.state.Bdeath);
      }
    );
  };

  handleADeath = e => {
    //console.log(e);

    this.setState(
      {
        Adeath: e
      },
      () => {
        console.log("A-Death -> " + this.state.Adeath);
      }
    );
  };

  handleBInput = e => {
    //console.log(e);

    this.setState(
      {
        Binitial: e
      },
      () => {
        console.log("B-Initial -> " + this.state.Binitial);
      }
    );
  };

  handleAInput = e => {
    //console.log(e);

    this.setState(
      {
        Ainitial: e
      },
      () => {
        console.log("A-Initial -> " + this.state.Ainitial);
      }
    );
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
    /*this.setState({
      value: value
    });*/
  };

  handleOnSubmit = e => {
    e.preventDefault();
    let sh = false;
    console.log("Form submitted");
    let { Ainitial, Binitial, Adeath, Bdeath, Agrowth, Bgrowth } = this.state;
    if (Ainitial === "" || isNaN(Ainitial)) {
      alert("You have to provide initial population for predator");
    } else if (Binitial === "" || isNaN(Binitial)) {
      alert("You have to provide initial population for prey");
    } else if (Agrowth === "" || isNaN(Agrowth)) {
      alert("You have to provide growth rate for predator");
    } else if (Bgrowth === "" || isNaN(Bgrowth)) {
      alert("You have to provide growth rate for prey");
    } else if (Adeath === "" || isNaN(Adeath)) {
      alert("You have to provide death rate for predator");
    } else if (Bdeath === "" || isNaN(Bdeath)) {
      alert("You have to provide death rate for prey");
    } else {
      sh = true;
      this.generateGraph();
    }
    this.setState({
      show: sh
    });
  };

  showValuesTable = index => {
    let prey = { ...this.state.data.datasets[0].data };
    let pred = { ...this.state.data.datasets[1].data };

    let ind = 0;
    let pr0 = [];
    let pr1 = [];
    if (index === 1) {
      pr0 = [prey[1], prey[3], prey[5], prey[7], prey[9]];
      pr1 = [pred[1], pred[3], pred[5], pred[7], pred[9]];
      ind = 0;
    } else {
      pr0 = [prey[11], prey[13], prey[15], prey[17], prey[19]];
      pr1 = [pred[11], pred[13], pred[15], pred[17], pred[19]];
      ind = 5;
    }
    this.setState({
      ind: ind,
      pr0: pr0,
      pr1: pr1
    });
  };

  generateGraph = () => {
    let pred = [];
    let prey = [];
    let counter = 0;
    const fineness = 0.001;
    let aI = parseFloat(this.state.Ainitial);
    let bI = parseFloat(this.state.Binitial);
    let aG = parseFloat(this.state.Agrowth);
    let bG = parseFloat(this.state.Bgrowth);
    let aD = parseFloat(this.state.Adeath);
    let bD = parseFloat(this.state.Bdeath);
    pred.push(aI);
    prey.push(bI);

    for (let i = 0; i < 100000; i++) {
      if (counter === 5000) {
        pred.push(aI);
        prey.push(bI);
        counter = 0;
        let st =
          "Generation " +
          i +
          ": Predator: " +
          aI +
          ", Prey: " +
          bI +
          "\t\tNEW GENERATION!";
        console.log(st);
      }

      let preytemp = bI + (bG * bI - bD * aI * bI) * fineness;
      aI = aI + (aG * bI * aI - aD * aI) * fineness;
      bI = preytemp;
      counter++;
    }

    let data = { ...this.state.data };
    let pr0 = [prey[1], prey[3], prey[5], prey[7], prey[9]];
    let pr1 = [pred[1], pred[3], pred[5], pred[7], pred[9]];
    data.datasets[0].data = prey;
    data.datasets[1].data = pred;
    this.setState(
      {
        ind: 0,
        pr0: pr0,
        pr1: pr1,
        data: data,
        show: true
      },
      () => {
        console.log("Graph generated");
      }
    );
    // let prey = { ...this.state.data.datasets.data[0].data };
    // let pred = { ...this.state.data.datasets.data[1].data };
    console.log(pred);
    console.log(prey);
  };

  render() {
    let { value } = this.state;

    let table = false;
    if (this.state.show === true)
      table = (
        <TableSample
          data0={this.state.pr0}
          data1={this.state.pr1}
          showValuesTable={this.showValuesTable}
          index={this.state.ind}
        />
      );

    return (
      <div style={styl}>
        <Grid style={styl2} divided>
          <Grid.Column>
            <Grid.Row>
              <div style={{ height: "45%", width: "80%", textAlign: "center" }}>
                <div>
                  <Background />
                  <Chart data={this.state.data} />
                </div>
              </div>
            </Grid.Row>
            <Grid.Row>
              <h2>Input Values</h2>
              {/* <Horizontal
                style
                handleChangeStart={this.handleChangeStart}
                handleChange={this.handleChange}
                handleChangeComplete={this.handleChangeComplete}
                value={value}
              /> */}
              <Grid columns={2} divided>
                <Grid.Row>
                  <Grid.Column>
                    <FormSample
                      style={{ margin: "10%" }}
                      handleOnSubmit={this.handleOnSubmit}
                      handleAInput={this.handleAInput}
                      handleBInput={this.handleBInput}
                      handleADeath={this.handleADeath}
                      handleBDeath={this.handleBDeath}
                      handleAGrowth={this.handleAGrowth}
                      handleBGrowth={this.handleBGrowth}
                    />
                  </Grid.Column>
                  <Grid.Column>{table}</Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default App;

// {this.state.show && (
//   <div style={{ margin: "10%" }}>
//     <h4>Predator Initial Population -> {this.state.Ainitial}</h4>
//     <h4>Prey Initial Population -> {this.state.Binitial}</h4>
//     <h4>Predator Growth Rate -> {this.state.Agrowth}</h4>
//     <h4>Prey Growth Rate -> {this.state.Bgrowth}</h4>
//     <h4>Predator Death Rate -> {this.state.Adeath}</h4>
//     <h4>Prey Death Rate -> {this.state.Bdeath}</h4>
//   </div>
// )}

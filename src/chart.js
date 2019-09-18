import React, { Component } from "react";
import { Line } from "react-chartjs-2";

/*let data = {
  labels: [
    "Gen1",
    "Gen2",
    "Gen3",
    "Gen4",
    "Gen5",
    "Gen6",
    "Gen7",
    "Gen8",
    "Gen9",
    "Gen10"
  ],
  datasets: [
    {
      label: "Prey",
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
      data: [20, 30, 15, 40, 20, 35, 25, 555, 666, 777]
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
      data: [
        50.0,
        171.91,
        219.76,
        120.6,
        60.05,
        34.41,
        29.51,
        57.2,
        202.58,
        208.65
      ]
    }
  ]
};*/

const styl = {
  zIndex: "2",
  // display: "inlineBlock",
  position: "relative",
  left: "10%"
  /*display: "flex",
  justifyContent: "center",
  width: "1000px"*/
};

const options = {
  legend: {
    labels: {
      // This more specific font property overrides the global property
      fontColor: "black"
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontColor: "black"
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontColor: "black"
        }
      }
    ]
  }
};

class Chart extends Component {
  // displayName: "LineExample",

  render() {
    let { data } = this.props;
    return (
      <div style={styl}>
        <h2>Predator-Prey Population Model</h2>
        <h3>Population / Generation</h3>

        <Line data={data} options={options} />
        {/* <img
          style={{
            height: "250px",
            width: "40%",
            position: "fixed",
            bolder: "0",
            padding: "0",
            top: "20%",
            right: "0%"
          }}
          src={require("./img.png")}
        /> */}
      </div>
    );
  }
}

export default Chart;

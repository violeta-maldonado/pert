import { ApexOptions } from "apexcharts";


export const optionsLine: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: true
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: "smooth"
  },
  title: {
    text: "Graph PERT",
    align: "center"
  },
  grid: {
    borderColor: "#e7e7e7",
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: [
      "-3σ",
      "-2σ",
      "-1σ",
      "M",
      "σ",
      "2σ",
      "3σ"
    ],
    title: {
      text: "varianza"
    }
  },
  yaxis: {
    title: {
      text: "Visitas totales"
    },
    min: 0,
    max: 100
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    floating: false
    //offsetY: -25
    //offsetX: -5
  }
};
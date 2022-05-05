import { ApexOptions } from "apexcharts";

export const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    colors: ['#2F3EB1'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    title: {
      text: "Graph PERT",
      align: "center",
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
        text: "Variance"
      }
    },
    yaxis: {
      title: {
        text: "Total hours"
      },
      min: 0,
      max: 100
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      floating: false
    }
  };
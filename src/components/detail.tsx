import { Typography, Grid } from '@mui/material';
import { useSelector } from 'src/redux/store';
import TablePert from './tablePert';
import type { FC } from 'react';
import { ApexOptions } from "apexcharts";
import { Chart } from './chart';

const Detail: FC = () => {
  const { name, cost, pert, graph } = useSelector((state) => state.dataProject);
  const finalCost = cost * parseInt(pert[3]);
  const seriesData = [
    {
      name: "pertLine",
      data: graph,
      color: '#8E443D'
    },
  ];
  const chartOptions: ApexOptions = {
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

  return (
    <div>
      <Typography color='#027B76' sx={{ fontSize: '18px', margin: '20px' }}>
        Details
      </Typography>
      <Typography sx={{ fontSize: '16px', margin: '20px' }}>
        Your project {name} has a cost of: $ {finalCost}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={6}>
          <TablePert></TablePert>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Chart
            options={chartOptions}
            series={seriesData}
            width={120}
          />
        </Grid>
      </Grid>
    </div>
  );
}


export default Detail;
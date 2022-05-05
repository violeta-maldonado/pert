import { Typography, Grid } from '@mui/material';
import { useSelector } from 'src/redux/store';
import TablePert from './tablePert';
import type { FC } from 'react';
import { Chart } from './chart';
import {chartOptions} from './constant';

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
          {/* @ts-ignore */}
          <Chart 
            options={chartOptions}
            series={seriesData}
            width={600}
          />
        </Grid>
      </Grid>
    </div>
  );
}


export default Detail;
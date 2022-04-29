import { Typography , Grid} from '@mui/material';
import { useSelector } from 'src/redux/store';
import TablePert from './tablePert';
import { Chart } from './chart';
import {  optionsLine} from './constants';
import type { FC } from 'react';

const Detail:FC = () => {
  const {name, cost, pert, graph}= useSelector((state) => state.dataProject);
  const finalCost = cost*pert[2]
  const seriesData = [
    {
        name: "pertLine",
        data: graph
      },
  ];
  return (
    <div>
      <Typography color='#027B76' sx={{fontSize:'18px' , margin:'20px'}}>
        Details
      </Typography>
      <Typography sx={{ fontSize: '16px', margin:'20px' }}>
        Your project {name} has a cost of: $ {finalCost} 
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6} sm={6}>
          <TablePert></TablePert>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Chart
            height="480"
            width="80%"
            options={optionsLine}
            series={seriesData}
            type="line"
          /> 
        </Grid>
      </Grid>
    </div>
  );
}


export default Detail;
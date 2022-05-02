import {Box, TextField, Grid, Button, Typography} from '@mui/material';
import { useSelector } from 'src/redux/store';

const TablePert = () => {
  const {pert}= useSelector((state) => state.dataProject);
  return (
    <>
      <Typography color={'#027B76'} sx={{margin:'20px',textAlign:'center' }}>PERT DATA</Typography>
      <Box sx={{ border: '2px solid #027B76', marginRight: '100px', marginLeft:'20px'}}>
        <Grid container spacing={0} >
          <Grid  sm={6} sx={{ borderRight: '2px solid #027B76'}}>
            <Typography color={'#8E443D'} sx={{textAlign:'center',borderBottom: '2px solid #027B76' }}>Porcentage</Typography>
            <Typography sx={{textAlign:'center'}}>68%</Typography>
            <Typography sx={{textAlign:'center'}}>95%</Typography>
            <Typography sx={{textAlign:'center'}}>97%</Typography>
          </Grid>
          <Grid  sm={6}>
            <Typography color={'#8E443D'} sx={{textAlign:'center' ,borderBottom: '2px solid #027B76'}}>Hours</Typography>
            <Typography sx={{textAlign:'center'}}>{pert[0]}</Typography>
            <Typography sx={{textAlign:'center'}}>{pert[1]}</Typography>
            <Typography sx={{textAlign:'center'}}>{pert[2]}</Typography>
          </Grid>
        </Grid>
      </Box> 
    </>
  );
}
export default TablePert
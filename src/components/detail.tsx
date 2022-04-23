import { Typography } from '@mui/material';

const Detail = () => {
  return (
    <div>
      <Typography color='#027B76' sx={{fontSize:'18px' , margin:'20px'}}>
        Details
      </Typography>
      <Typography sx={{ fontSize: '16px', margin:'20px' }}>
        Su proyecto  tiene un costo de $ 
      </Typography>
    </div>
  );
}

export default Detail
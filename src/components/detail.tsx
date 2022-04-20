import { TextField, Toolbar, Button, Typography } from '@mui/material';
import useProject from 'src/hooks/useProject';

const Detail = () => {
  const { name, cost } = useProject();
  console.log('detail');
  console.log(name);
  return (
    <div>
      <Typography color='#027B76' sx={{fontSize:'18px' , margin:'20px'}}>
        Details
      </Typography>
      <Typography sx={{ fontSize: '16px', margin:'20px' }}>
        Su proyecto {name} tiene un costo de $ {cost}
      </Typography>
    </div>
  );
}

export default Detail
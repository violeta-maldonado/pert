import { Typography } from '@mui/material';
import { selectActiveName, selectActiveCost } from 'src/redux/store/dataProject/reducer';
import { useSelector } from 'src/redux/store';

const Detail = () => {
  const name = useSelector(selectActiveName);
  const cost = useSelector(selectActiveCost);
  return (
    <div>
      <Typography color='#027B76' sx={{fontSize:'18px' , margin:'20px'}}>
        Details
      </Typography>
      <Typography sx={{ fontSize: '16px', margin:'20px' }}>
        Su proyecto  {name} tiene un costo de $ {cost}
      </Typography>
    </div>
  );
}


export default Detail;
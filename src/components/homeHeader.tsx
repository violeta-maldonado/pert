
import Image from 'next/image'
import { Grid, Typography }from '@mui/material';

const HomeHeader = () => {
    return (
      <Grid container spacing={0}>
        <Grid item xs={6} sm={9} sx={{alignContent: 'center'}}>
          <Typography 
            align='center'
            color='#0C3640'
            sx={{fontSize:'36px'}}
          >
            COST ESTIMATION OF A PROJECT
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} sx={{justifyContent:'center', display:'flex'}}>
          <Image
            src={'/static/pert.png'}
            width={200}
            height={100}
            layout="fixed"
          />
        </Grid>
      </Grid>
    );
}

export default HomeHeader
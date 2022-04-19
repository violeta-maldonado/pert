
import Image from 'next/image'
import { Grid, Toolbar, Typography }from '@mui/material';

const HomeHeader = () => {
    return (
      <Grid container spacing={2}>
        <Grid item xs={11} sm={6}>
          <Typography 
            align='center'
            color='#0C3640'
            variant='h2'
          >
            COST ESTIMATION OF A PROJECT
          </Typography>
        </Grid>
        <Grid item xs={1} sm={6}>
          <Typography>HOLI BOLI :3</Typography>
          <Image
            src={'/static/pert.jpg'}
            width={200}
            height={100}
            layout="fixed"
          />
        </Grid>
      </Grid>
    );
}

export default HomeHeader
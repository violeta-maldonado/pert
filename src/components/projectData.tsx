import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectData = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <Box sx={{ border: '3px solid #027B76', padding: '5px', margin: '10px' }}>
          <Typography className='subtitle'>Project Data</Typography>
          <div>
            <Toolbar>
              <Typography variant="h4" padding={0} className='text1' >
                Project name:
              </Typography>
              <input
                id="name"
                style={{ height: 30 }}
              />
            </Toolbar>
            <Toolbar>
              <Typography variant="h4" className='text1' >
                Cost per hour:  $
              </Typography>
              <input
                id="cost"
                style={{ height: 30 }}
              />
            </Toolbar>
          </div>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <div>
          <Button
            className='button1'>
            Load EXCEL
          </Button>
        </div>
        <div>
          <Button
            className='button1'>
            Export EXCEL
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
export default ProjectData
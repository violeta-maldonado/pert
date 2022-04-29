import {Box, TextField, Grid, Button, Typography} from '@mui/material';
import { useDispatch } from 'src/redux/store';
import { nameProject , costProject} from 'src/redux/slices/data-project';

// interface IProjectData {
//   loadE?: Function;
//   exportE?: Function;
// }

const ProjectData = () => {
  const dispatch = useDispatch();
  
  return (
      <Grid container spacing={1}>
        <Grid item xs={6} sm={6}>
          <Box sx={{ border: '3px solid #027B76', padding: '10px', margin: '10px' }}>
            <Typography color='#027B76' sx={{fontSize:'18px' }}>
              Project Data
            </Typography>
            <Grid item xs= {12} sm={6}>
              <Typography sx={{fontSize:'16px' }}>
                  Project name:
              </Typography>
              <TextField
                variant="outlined"
                size='small'
                margin="normal"
                required
                fullWidth
                id='name'
                name='Project name'
                onChange = {(e) => {
                  dispatch(nameProject(e.target.value))
                }}
              />
            </Grid>
            <div>
              <Typography sx={{fontSize:'16px' }} >
                Cost per hour:  $
              </Typography>
              <TextField
                variant="outlined"
                size='small'
                margin="normal"
                required
                fullWidth
                type='number'
                id='cost'
                name='cost'
                onChange = {(e) => {
                  dispatch(costProject(parseInt(e.target.value)))
                }}
              />
            </div>
          </Box>
        </Grid>
        <Grid item xs={4} sm={6} sx={{alignItems:'center'}}>
          <div>
            <Button
              sx={{borderRadius:'15px', padding:'10px', marginBottom:'10px',color:'white' , backgroundColor:'#060C3E'}}
              >
              Load EXCEL
            </Button>
          </div>
          <div>
            <Button
              sx={{borderRadius:'15px', padding:'10px',color:'white' , backgroundColor:'#060C3E'}}>
              Export EXCEL
            </Button>
          </div>
        </Grid>
      </Grid>
  );
}
export default (ProjectData)
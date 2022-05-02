import { TextField, Box, Button, Typography} from '@mui/material';
import PropTypes from 'prop-types';

interface IAppActivity {
  handleFormSubmit?: (e) => void;
  handleAddFormChange?: (e) => void;
}

const AddActivity = (props: IAppActivity) => {
  const { handleFormSubmit, handleAddFormChange } = props;

  return (
    <Box sx={{ margin: '20px' }}>
      <Typography color='#004379' sx={{ fontSize: '16px' }}>Add Activity</Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          type="text"
          name="name"
          label="Activity name"
          size='small'
          placeholder="Enter name"
          sx={{ paddingRight: '10px' , marginTop:'10px'}}
          onChange={handleAddFormChange}
        />
        <TextField
          type="number"
          label="Optimistic duration (hours)"
          name="optimistic"
          size='small'
          placeholder="Enter optimistic"
          sx={{ paddingRight: '10px' , marginTop:'10px'}}
          onChange={handleAddFormChange}
        />
        <TextField
          type="number"
          label="Most Likely duration (hours)"
          name="mostLikely"
          size='small'
          placeholder="Enter most likely"
          sx={{ paddingRight: '10px' , marginTop:'10px'}}
          onChange={handleAddFormChange}
        />
        <TextField
          type="number"
          label="Pessimistic duration (hours)"
          name="pessimistic"
          size='small'
          placeholder="Enter pessimistic"
          sx={{ paddingRight: '10px' , marginTop:'10px'}}
          onChange={handleAddFormChange}
        />
        <Button
          type='submit'
          sx={{ borderRadius: '15px', padding: '10px', marginBottom: '10px', color: 'white', backgroundColor: '#0B132B','&:hover':{backgroundColor: '#0B132B'} }}
        >
          Add
        </Button>
      </form>
    </Box>
  );
}

export default AddActivity

AddActivity.propTypes = {
  handleFormSubmit: PropTypes.func,
  handleAddFormChange: PropTypes.func
};
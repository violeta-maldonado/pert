import { useState } from 'react';
import {TextField, Box, Button, Typography, styled } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from "../data.json";
import { nanoid } from "nanoid";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#BDC6C6',
    color: '#000000',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Activities = () => {
  const [activityData, setActivityData] = useState(data);
  const [addData, setAddData] = useState({
    name:'',
    optimistic:'',
    mostLikely:'',
    pessimistic:''
  });
  // TextField fuction
  const handleAddFormChange = async e =>{
    e.preventDefault();
    const fieldName = e.target.getAttribute('name');
    const fieldValue = e.target.value;
    const newFormData = { ...addData};
    newFormData[fieldName] = fieldValue;

    setAddData(newFormData);
  }
  // Add button fuction
  const handleFormSubmit = async e =>{
    e.preventDefault();
    const newActivity = {
      name:addData.name,
      optimistic:addData.optimistic,
      mostLikely:addData.mostLikely,
      pessimistic:addData.pessimistic,
    };

    const newActivitys = [...activityData, newActivity];
    setActivityData(newActivitys);
  }
  // Delete button fuction
  const handleDeleteClick = (activityName) => {
    const newActivitys = [...activityData];
    const index = activityData.findIndex((activity) => activity.name === activityName);
    newActivitys.splice(index, 1);
    setActivityData(newActivitys);
  };
  return (
    <div>
      <div>
      <Typography color='#027B76' sx={{fontSize:'18px' , margin:'20px'}}>
        Activities
      </Typography>
      </div>
      <div>
        <TableContainer sx={{margin:'15px',border: '1px solid #000000' ,maxWidth: '95%'}}>
          <Table  aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Activity name</StyledTableCell>
                <StyledTableCell align="right">Optimistic duration (hours)</StyledTableCell>
                <StyledTableCell align="right">Most likely duration (hours)</StyledTableCell>
                <StyledTableCell align="right">Pessimistic duration (hours)</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activityData.map((activity) => (
                <TableRow
                  key={activity.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  <TableCell component="th" scope="row">{activity.name}</TableCell>
                  <TableCell align="center">{activity.optimistic}</TableCell>
                  <TableCell align="center">{activity.mostLikely}</TableCell>
                  <TableCell align="center">{activity.pessimistic}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{borderRadius:'15px', paddingLeft:'10px',paddingRight:'10px', marginBottom:'10px',color:'white' , backgroundColor:'#D10404'}}
                      onClick={() => handleDeleteClick(activity.name)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Box sx={{margin:'20px'}}>
        <Typography color='#004379' sx={{fontSize: '16px'}}>Add Activity</Typography>
        <form onSubmit={handleFormSubmit}>
          <TextField
            type="text"
            name="name"
            size='small'
            placeholder="Enter name"
            sx={{paddingRight:'10px'}}
            onChange={handleAddFormChange}
          /> 
          <TextField
            type="number"
            name="optimistic"
            size='small'
            placeholder="Enter optimistic"
            sx={{paddingRight:'10px'}}
            onChange={handleAddFormChange}
          />
          <TextField
            type="number"
            name="mostLikely"
            size='small'
            placeholder="Enter most likely"
            sx={{paddingRight:'10px'}}
            onChange={handleAddFormChange}
          />
          <TextField
            type="number"
            name="pessimistic"
            size='small'
            placeholder="Enter pessimistic"
            sx={{paddingRight:'10px'}}
            onChange={handleAddFormChange}
          />
          <Button
            type='submit'
            sx={{borderRadius:'15px', padding:'10px', marginBottom:'10px',color:'white' , backgroundColor:'#060C3E'}}
          >
            Add
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Activities
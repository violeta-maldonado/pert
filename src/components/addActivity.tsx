import {TextField, Box, Button, Typography, styled } from '@mui/material';

interface IAppActivity {
    handleFormSubmit?: Function;
    handleAddFormChange?: Function
}

const AddActivity = (props: IAppActivity) =>{
    const { handleFormSubmit, handleAddFormChange} = props;
    
    return(
        <Typography></Typography>
    );
}

export default AddActivity
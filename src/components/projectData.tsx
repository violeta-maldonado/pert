import { Box, TextField, Grid, Button, Typography, Input } from '@mui/material';
import { useDispatch } from 'src/redux/store';
import { useSelector } from 'src/redux/store';
import { nameProject, costProject, dataGraph } from 'src/redux/slices/data-project';
import * as xlsx from "xlsx";
import { activityProject, Excel , dataActivity} from 'src/redux/slices/data-project';

const ProjectData = () => {
  const dispatch = useDispatch()
  const { name, ExcelData} = useSelector((state) => state.dataProject);
  
  // Button to import Excel
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json:Excel[] = xlsx.utils.sheet_to_json(worksheet);
        console.log("data", json);
        dispatch(activityProject(json))
        dispatch(dataGraph(json))
        dispatch(dataActivity(json))
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  }

  // Button to export Excel
  const exportToExcel = () =>{
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(ExcelData);
    xlsx.utils.book_append_sheet(wb,ws,name);
    xlsx.writeFile(wb, "ExcelPer.xlsx" );
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={6}>
        <Box sx={{ border: '3px solid #027B76', padding: '10px', margin: '10px' }}>
          <Typography color='#027B76' sx={{ fontSize: '18px' }}>
            Project Data
          </Typography>
          <Grid item xs={12} sm={6}>
            <Typography sx={{ fontSize: '16px' }}>
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
              onChange={(e) => {
                dispatch(nameProject(e.target.value))
              }}
            />
          </Grid>
          <div>
            <Typography sx={{ fontSize: '16px' }} >
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
              onChange={(e) => {
                dispatch(costProject(parseInt(e.target.value)))
              }}
            />
          </div>
        </Box>
      </Grid>
      <Grid item xs={4} sm={6} sx={{ alignItems: 'center' }}>
        <>
          <input
            type="file"
            name="upload"
            id="myupload"
            style={{display:'none'}}
            onChange={readUploadFile}
          />
          <Button
            sx={{ borderRadius: '15px', marginTop: '30px', padding: '10px', color: 'white', backgroundColor: '#0B132B' ,'&:hover':{backgroundColor: '#0B132B'}}}
              onClick={exportToExcel}
          >
            Import EXCEL
          </Button>
        </>
        <div>
          <Button
            sx={{ borderRadius: '15px', marginTop: '10px',padding: '10px', color: 'white', backgroundColor: '#0B132B','&:hover':{backgroundColor: '#0B132B'} }}
              onClick={exportToExcel}
          >
            Export EXCEL
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
export default (ProjectData)
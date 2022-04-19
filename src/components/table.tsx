import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const columns = ['Activity name',
    'Optimistic duration (hours)',
    'Most likely duration (hours)',
    'Pessimistic duration (hours)',
    'Action'
];

const head = () =>{
    return columns.map(item => (
        <TableRow>
            {columns}
        </TableRow>
    ))
}
const TablePert = ()=>{
    return (
        <Table>
            <TableHead>
                <head/>
            </TableHead>
        </Table>
    );
}

export default TablePert
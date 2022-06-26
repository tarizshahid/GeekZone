import * as React from 'react';
import Navbar from '../Homepage/Navbar'
import './UserDashboard.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        allVariants: {
            fontSize: 16,
        },
    },

});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 'paid'),
    createData('Ice cream sandwich', 237, 9.0, 37, 'paid'),
    createData('Eclair', 262, 16.0, 24, 'cancelled'),
    createData('Cupcake', 305, 3, 67, 'paid'),
    createData('Gingerbread', 356, 16.0, 49, 'paid'),
  ];


const UserDashboard = () => {
  return (
    <>
    <Navbar/>
    <Table className='part1'>
      <td width={50}>
    <tr><h1 className='udh1'>User Details</h1></tr>  
    <tr><h2>Muhammad Shabrez</h2></tr>
    <tr><h2>mianshabrez@gmail.com</h2></tr>
    <tr><h2>0331-7180647</h2></tr>
    <tr><h1 className='udh1'>User Adresses</h1></tr>  
    <tr><h2>House no. 19 , Street no. 3 , Liaquatabad , Lhr </h2></tr>  
    <tr><h2>House no. 19 , Street no. 3 , Sadar , Lhr </h2></tr>  
    </td>
    
      <td>
      <tr><h1 className='udh2'>Order History</h1></tr>
      <tr>
      <div className='tabdiv'>
      <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Quantity&nbsp;</TableCell>
            <TableCell align="right">Date&nbsp;</TableCell>
            <TableCell align="right">Status&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
    </div>
      </tr>
      </td>
    </Table>
    <div className='vl'></div>
    </>
  )
}

export default UserDashboard
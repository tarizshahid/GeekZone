import * as React from 'react';
import { useState, useEffect } from 'react';

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
import axios from 'axios';

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
  

const UserDashboard = () => {
  const [order, setUser] = useState([])
  const [pid, setpid] = useState([])

  useEffect(async ()=> {
    try {
      let p_id=JSON.parse(localStorage.getItem("user"));
        console.log("orderss",);

        setpid(p_id);
        axios.post(`http://localhost:4000/api/cart/getData`,{data:{person_id:p_id._id}}).then(res => {

        const allusers=res.data.data;
        console.log("allusers", allusers);
        setUser(allusers);
      } );

    } catch (error) {
        console.error(error);
    }
  },[])

  return (
    <>
    <Navbar/>
    <Table className='part1'>
      <td width={50}>
    <tr><h1 className='udh1'>User Details</h1></tr>  
    <tr><h2>{pid.Fname}</h2></tr>
    <tr><h2>{pid.Lname}</h2></tr>
    <tr><h2>{pid.email}</h2></tr>
    <tr><h2>{pid.user_type}</h2></tr>

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
          {order.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.product_name}</TableCell>
              <TableCell align="right">{row.product_price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
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
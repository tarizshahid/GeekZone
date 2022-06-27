import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Box, margin } from '@mui/system';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  
  
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableButton = styled(Button)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.primary.light,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function UsersTable() {
  const [user, setUser] = useState([])

  useEffect(async ()=> {
    try {

        console.log("usersss",);
        axios.post(`http://localhost:4000/api/person/getanyData`,{data:{}}).then(res => {

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">ID</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name&nbsp;</StyledTableCell>
            <StyledTableCell align="right">E-mail&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Type&nbsp;</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="left">{row._id}</StyledTableCell>
              <StyledTableCell align="right">{row.Fname}</StyledTableCell>
              <StyledTableCell align="right">{row.Lname}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.user_type}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

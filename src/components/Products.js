import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material/';
import { Box, margin } from '@mui/system';
import {Link as RouterLink} from 'react-router-dom'

import Link from '@mui/material/Link';

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
  // hide last border
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

const rows = [
  createData('Iphone Charger', 45 , 64, "Accessories", 4.5),
  createData('Power Bank 10000mAh', 88, 34 , "Electronics" , 4.0),
  createData('Quadcopter Drone', 250, 6, "Drone" , 4.3),
  createData('Samsung Galaxy S10', 699 , 4, "Mobile", 3.9),
  createData('Power Bank 10000mAh', 88, 34 , "Electronics" , 4.0),
  createData('BackLit Mini Keyboard', 29 , 16, "Accessories" , 5),
  createData('Haylou Smart Braclet', 38 , 20, "Electronics", 4.1),
  createData('Iphone 11 Pro ', 999 , 24 , "Mobile" , 4.0),
  createData('LED Bluetooth Speaker', 55 , 21 , "Electronics" , 4.4),
];

export default function ProductsTable() {
  return (
      <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="right">PPU(USD)</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box  sx = {{paddingY: 2}}>
    <Box sx = {{mx: "auto", width: 200}}>

    <Link to="/dashboard/products/AddProduct" component={RouterLink} variant="body2">
                    
    <StyledTableButton variant='contained'>+ ADD PRODUCT</StyledTableButton>
                  </Link>


    </Box>
    </Box>
    </>
  );
}

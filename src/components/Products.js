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
import { Button } from '@mui/material/';
import { Box, margin } from '@mui/system';
import {Link as RouterLink} from 'react-router-dom'
import axios from 'axios';

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



export default function ProductsTable() {

  const [product, setProduct] = useState([])

  useEffect(async ()=> {
    try {

        console.log("usersss",);
        axios.post(`http://localhost:4000/api/items/getData`,{data:{}}).then(res => {

        const allproducts=res.data.data;
        console.log("allProducts", allproducts);
        setProduct(allproducts);
      } );

    } catch (error) {
        console.error(error);
    }
  },[])

  const del = (ev,item) => {
    console.log("sdfdf", item._id);
 
    axios.post(`http://localhost:4000/api/items/deleteData`,{data:{_id:item._id}}).then(res => {
      if(res.data.data){
        console.log("resss",res.data.data );
        window.alert("Item Deleted")
        axios.post(`http://localhost:4000/api/items/getData`,{data:{}}).then(res => {

        const allproducts=res.data.data;
        console.log("allProducts", allproducts);
        setProduct(allproducts);
      } );
      }
   } );
  };

  return (
      <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Product Name</StyledTableCell>
            <StyledTableCell align="right">Price(PKR)</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Rating</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {product.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.quantity}</StyledTableCell>
              <StyledTableCell align="right">{row.category}</StyledTableCell>
              <StyledTableCell align="right">{row.review}/5</StyledTableCell>
              <StyledTableButton variant='contained' onClick={event => del(event, row)} >Delete</StyledTableButton>

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

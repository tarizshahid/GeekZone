import * as React from 'react';
import { useState, useEffect } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import axios from 'axios';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}


function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [order, setUser] = useState([])

  useEffect(async ()=> {
    try {

        console.log("orderss",);
        axios.post(`http://localhost:4000/api/cart/getData`,{data:{}}).then(res => {

        const allusers=res.data.data;
        console.log("allusers", allusers);
        setUser(allusers);
      } );

    } catch (error) {
        console.error(error);
    }
  },[])


  return (
    <React.Fragment>
      <Title>All Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.map((row) => (
            <TableRow key={row.product_id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.product_name}</TableCell>
              <TableCell>{row.person_name}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="right">{`$${row.product_price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </React.Fragment>
  );
}

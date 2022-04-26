import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Feb, 2022',
    'Tariz Shahid',
    'Renala, Khurd',
    'VISA ⠀•••• 0001',
    100.13,
  ),
  createData(
    1,
    '17 Feb, 2022',
    'Ahsan Iqbal',
    'Sangla, Sangla Hill',
    'MSTR ⠀•••• 0002',
    134.56,
  ),
  createData(2, '16 Jan, 2022', 'Arham Irfan', 'Sahiwal, Punjab', 'MSTR ⠀•••• 1231', 202.41),
  createData(
    3,
    '19 Feb, 2022',
    'Muzzmil Javed',
    'Johar, Lahore',
    'AMEX ⠀•••• 0003',
    213.78,
  ),
  createData(
    4,
    '12 Jan, 2022',
    'Mian Shabrez',
    'Shahkot, Nankana',
    'VISA ⠀•••• 4079',
    913.26,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}

import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Avg. Sale Value</Title>
      <Typography component="p" variant="h4">
        5010/- PKR
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {new Date().toLocaleString()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          details
        </Link>
      </div>
    </React.Fragment>
  );
}

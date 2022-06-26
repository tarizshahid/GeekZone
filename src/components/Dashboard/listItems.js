import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link as RouterLink} from 'react-router-dom'
import { Link } from '@mui/material';
import './listitems.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

export const mainListItems = (
  <>
    <ListItem button component={RouterLink} to="/dashboard" >
      <ListItemIcon>
        <DashboardIcon/>
        {/* <Dashboard/> */}
      </ListItemIcon>
      <ListItemText className='popo' primary="Dashboard" />
    </ListItem>
    <ListItem button component={RouterLink} to="/dashboard/orders" >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button component={RouterLink} to="/dashboard/users">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button component={RouterLink} to="/dashboard/products">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItem>
  </>
);

export const secondaryListItems = (
  <div>
  </div>
);

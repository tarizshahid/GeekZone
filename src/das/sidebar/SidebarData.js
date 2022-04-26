import React from 'react';
import { LineStyle,Timeline,TrendingUp,PersonOutline } from "@material-ui/icons"; 

export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
    icon:  <LineStyle className="sidebaricon"/>,
    cName: 'sidebarlistitem'
  },
  {
    title: 'Analytics',
    path: '/Analytics',
    icon: <Timeline className="sidebaricon"/>,
    cName: 'sidebarlistitem'
  },
  {
    title: 'Orders',
    path: '/order',
    icon: <TrendingUp className="sidebaricon"/>,
    cName: 'sidebarlistitem'
  },
  {
    title: 'Users',
    path: '/Users',
    icon: <TrendingUp className="sidebaricon"/>,
    cName: 'sidebarlistitem'
  },
  
];
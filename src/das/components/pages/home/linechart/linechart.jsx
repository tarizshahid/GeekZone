import './linechart.css';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Linechart() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          "pv(cm)": 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          "pv(cm)": 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          "pv(cm)": 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          "pv(cm)": 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
         "pv(cm)": 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          "pv(cm)": 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          "pv(cm)": 4300,
          amt: 2100,
        },
      ];
      
  return (
  <>
  <div className='linechart'>


  <h3 className='Analytics'>Analytics</h3>
 
  <ResponsiveContainer width="95%" height="80%">
        <LineChart
          
          data={data}
          margin={{
            top: 7,
            right: 30,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv(cm)" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#99ca7d" />
        
        </LineChart>
      </ResponsiveContainer>
    
  

</div>
  </>);
}

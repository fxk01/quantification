import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import Container from './Container';

const AChart = ({ data ,setDomain = [0, 'auto']}) => (
  <Container ratio={1}>
    <AreaChart data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
        <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#4ab6bd" stopOpacity={.8}/>
      <stop offset="95%" stopColor="#1c5f8b " stopOpacity={.8}/>
    </linearGradient>
  </defs>
      <XAxis  tickLine ={false} dataKey="x" stroke="#fff"/>
      <YAxis  tickLine ={false}  stroke="#fff"  domain={setDomain} />
      <Tooltip  />
      <Area  dataKey="y" stroke="#1c5f8b" fillOpacity={1} fill="url(#colorUv)" />
    </AreaChart>
  </Container>
);

export default AChart;

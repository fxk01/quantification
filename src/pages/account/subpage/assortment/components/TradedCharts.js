import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import Container from 'account/subpage/profit/components/Container';
const renderLabel = props => {
  const { x, y, value } = props;
  return (
   
      <g>
        <text
          x={x}
          y={y-10}
          textAnchor={'start'}
          fill={'#fff'}
        >{`成交数量${value}笔`}</text>
      </g>
    
  );
};
const TradedCharts = ({ data }) => (
  <Container>
    <BarChart
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#4ab6bd" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#1c5f8b " stopOpacity={0.8} />
        </linearGradient>
      </defs>
      <XAxis dataKey="x" tickLine={false} stroke="#fff" />
      <YAxis stroke="#fff" tickLine={false} />
      <Bar
        dataKey="y"
        // isAnimationActive={false}
        fill="url(#colorUv)"
        maxBarSize={40}
        label={renderLabel}
      />
    </BarChart>
  </Container>
);

export default TradedCharts;

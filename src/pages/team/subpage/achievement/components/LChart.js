import React from 'react';
import { LineChart ,Line , XAxis, YAxis, Tooltip,CartesianGrid } from 'recharts';
import Container from 'account/subpage/profit/components/Container';
const CustomizedAxisTick = (props) =>{
  const {x,y,payload} = props
  return ( <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor='end' fill="#fff" transform="rotate(-30)">{payload.value}</text>
  </g>)
}
const YAxisTick = (props) => {
  const {x,y,payload} = props
  return ( <g transform={`translate(${x},${y})`}>
  <text x={0} y={0} dy={12} textAnchor='end' fill="#fff">{payload.value}</text>
</g>)
}

const LChart = ({ data }) => (
  <Container ratio={1} left>
    <LineChart  data={data}
        margin={{
          top: 0,
          right: 80,
          left: 0,
          bottom: 20,
        }}>
        <CartesianGrid  vertical={false} strokeDasharray="6 6"  />
      <XAxis  tickLine ={false} interval={3} padding={{left:30,right:10}} dataKey="time" stroke="#fff" strokeDasharray="3" tick={CustomizedAxisTick}/>
      <YAxis  tickLine ={false}  stroke="#fff" orientation='right' strokeDasharray="3" mirror={true} tick={YAxisTick} />
      <Tooltip  />
      <Line dataKey="profit" stroke="#10a9bd" dot={false} />
    </LineChart >
  </Container>
);

export default LChart;

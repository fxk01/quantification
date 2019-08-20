import React, { PureComponent } from 'react';
import { BarChart, Bar, YAxis } from 'recharts';
import Container from 'account/subpage/profit/components/Container';
const getPath = (x, y, w, h, r) => {
  let b = 0;
  if (r === 0 || r === 100) {
    b = 0;
  } else {
    b = (100 / r) * 5;
  }
  return `M${x},${y + h}
          L${x},${y + b} 
          L ${x + w},${y}
          L${x + w},${y + h}
          Z`;
};

const fullObj = {
  blue:'rgba(11,20,31,0.9)',
  dark:'rgba(49,52,59,0.9)'
}

class BCharts extends PureComponent {


  renderShape = props => {
    const { fill, x, y, width, height, payload } = props;
   
    return (
      <g>
        <path
          d={getPath(x, y, width, height, payload.rate)}
          stroke="none"
          fill={fill}
        />
        <text x={x + width - 10} y={15} fill="white" textAnchor="end">
          {payload.title}
        </text>
        
        <text x={'50%'} y={'50%'} textAnchor="middle" fill="white" style={{fontSize:"27px"}} >
        
          {payload.rate + '%'}
          <animate 
          attributeName='opacity'
          values='1;1;1;1;1;0;0;0;0;0;0;0;0;0;1;1;1;1'
          begin="0s" dur="10s"
          repeatCount="indefinite"
          
          />
        </text>
        <text x={'50%'} y={'50%'} textAnchor="middle" fill="white" opacity='0' style={{fontSize:"27px"}} >
          {payload.nv}
          <animate 
          attributeName='opacity'
          values='0;0;0;0;0;1;1;1;1;1;1;1;1;1;0;0;0;0'
          begin="0s" dur="10s"
          repeatCount="indefinite"
          />
        </text>
      </g>
    );
  };

  render() {
    const { data, value,theme } = this.props;

    return (
      <Container minHeight={'100%'} maxHeight={'100%'} >
        <BarChart data={this.props.data} margin={{top:0,right:5,bottom:0,left:5}} >
          <defs>
            <linearGradient id="win" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1aa3f4" stopOpacity={1} />
              <stop offset="55%" stopColor="#49c5d3 " stopOpacity={1} />
              <stop offset="95%" stopColor="#70e1b7 " stopOpacity={1} />
            </linearGradient>
            <linearGradient id="lose" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff8930" stopOpacity={1} />
              <stop offset="95%" stopColor="#ffb733 " stopOpacity={1} />
            </linearGradient>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#349ee0" stopOpacity={1} />
              <stop offset="95%" stopColor="#6d72e8 " stopOpacity={1} />
            </linearGradient>
          </defs>
          <YAxis hide={true} domain={[0, data[0].total]} />
          <Bar
            dataKey="nv"
            fill={`url(#${value})`}
            background={{ fill: fullObj[theme] }}
            shape={this.renderShape}
          />
        </BarChart>
      </Container>
    );
  }
}

export default BCharts;

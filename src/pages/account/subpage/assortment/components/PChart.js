import React from 'react';
import { PieChart, Pie, Sector, Cell,  } from 'recharts';
import Container from 'account/subpage/profit/components/Container';

const COLORS = ['#03eaff', '#1c2633'];

const renderActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
    payload
  } = props;
  return (
    <g>
       <text x={24} y={8} dy={8} textAnchor="top" fill={'#fff'}>{`交易最频繁的品种：${payload.kindName} 交易 ${payload.count}次 `}</text>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius - 2}
        outerRadius={outerRadius + 2}
        fill={fill}
      />
        <text x={24} y={cy-30} dy={8} textAnchor="top" fill={'#fff'}>{`${payload.kindName}`}</text>
        <text x={44} y={cy} dy={8} textAnchor="top" fill={'#fff'}>{` ${(percent * 100).toFixed(2)}%`}</text>
    </g>
  );
};
class PChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    };
  }
 
  componentDidMount(){
    // console.log(this.props)
  }

  render() {
    return (
      <Container minHeight={200} maxHeight={200} ratio={1}>
        <PieChart margin={{ top: 40, right: 20, bottom: 0, left: 20 }}>
          <Pie
            activeIndex={0}
            data={this.props.data}
            nameKey="kindName"
            dataKey="rate"
            labelLine={false}
            cx="65%"
            cy="40%"
            animationBegin={50}
            animationDuration={500}
            innerRadius={30}
            outerRadius={60}
            startAngle={-70}
            endAngle={310}
            activeShape={renderActiveShape}
          >
            {this.props.data.map((entry, index) => (
              <Cell
                key={index}
                stroke={COLORS[index % COLORS.length]}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </Container>
    );
  }
}

export default PChart;

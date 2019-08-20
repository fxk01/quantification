import React from 'react';
import {  PieChart, Pie, Sector, Cell ,  } from 'recharts';
import Container from './Container';

const COLORS = ['#2469f2', '#4494f5', '#15cee6', '#00eeff'];
const RADIAN = Math.PI / 180;  


const renderActiveShape = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, percent } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius-10 ) * cos;
   const sy = cy + (outerRadius-10 ) * sin;
  const lx = cos >= 0 ? cx+140 : cx-140 ;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{`${(percent * 100).toFixed(2)}%`}</text>
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius-4}
        outerRadius={outerRadius + 4}
        fill={fill}
      />
      <circle cx={sx} cy={sy} r={4} fill={'#fff'} stroke="none"/>
      <path d={`M${sx},${sy}L${lx},${sy}L${lx+1},${sy+1}`} stroke={'#fff'} fill="#fff"/>
    </g>
  );
};

const renderLabel = (props) => {
  const { cx, cy, midAngle, outerRadius, payload,fill } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius-10 ) * cos;
    const sy = cy + (outerRadius-10 ) * sin;
    const lx = cos >= 0 ?  cx+140 : cx-140  ;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    return (
      <g>
      <path d={`M${sx},${sy}L${lx},${sy}`} stroke={'#fff'} fill={"#fff"}/>
      <circle cx={sx} cy={sy} r={2} fill={'#fff'} stroke="none"/>
      <text x={lx + (cos >= 0 ? -1 : 1) * 50} y={sy-5} textAnchor={textAnchor} fill={fill}>{payload.kindName}</text>
      <text x={lx + (cos >= 0 ? -1 : 1) * 20} y={sy+13} textAnchor={textAnchor} fill={fill}>{payload.count}</text>
    </g>
    )
}
class PChart extends React.Component{
  constructor(props,){
    super(props)
    this.state = {
      activeIndex : null
    }
  }
  
  

  onPieEnter(data,index){
    this.setState({
      activeIndex : index
    })
  }
  render(){
    return (
      <Container minHeight={180} maxHeight={180} ratio={1}>
      
      <PieChart margin={
         {top: 0, right: 20, bottom: 0, left: 20}
      }>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape} 
          data={this.props.data}
          nameKey='kindName'
          dataKey='count'
          labelLine={false}
          
          // isAnimationActive = {false}
          animationBegin={50}
          animationDuration={500}
          cx='50%'
          cy='50%'
          innerRadius={40}
          outerRadius={80}
          onClick={this.onPieEnter.bind(this)}
          label = {renderLabel}
        >
          {
            this.props.data.map((entry,index)=>(<Cell key={index} stroke={COLORS[index%COLORS.length]} fill={COLORS[index%COLORS.length]}/>))
          }
        </Pie>
      </PieChart>
      </Container>
      
    )
  }
}


export default PChart;

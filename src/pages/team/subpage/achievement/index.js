import React from 'react';
import { connect } from 'react-redux';
import { Col, Card, } from 'antd';
import { actionCreators } from './store';
import {StyledRow ,StyledrightRow} from 'account/subpage/profit/style'
// import LChart from './components/LChart'

import profitPng from '@/statics/images/profit.png';

class Profit extends React.Component {
 
  componentWillMount() {
    this.props.init()
  }
  render() {
    const { profitList  } = this.props.team;
    const LCharProps = {
      data : profitList
    }
    return (
      <StyledRow type="flex">
        <Col lg={16} md={24} >
          <Card
            bordered={false}
            title={
              <>
                <h2>最佳账户收益图</h2>
                <p>Optimal account profit graph</p>
              </>
            }
            headStyle={{
              padding: '0 27px',
              color: '#fff',
              border: 'none'
            }}
          >
            {/* <LChart {...LCharProps}/> */}
            <img src={profitPng} width="560" height="auto" alt="profit" />
          </Card>
        </Col>
        <StyledrightRow lg={8} md={24} >
          <Card 
          title={
            <>
              <h2>交易平均胜率</h2>
              <p>Average winning percentage</p>
            </>
          }
          >
              {/* <span className="rate">{rate}%</span> */}
              <span className="rate">62%</span>
          </Card>
          <Card 
          title={
            <>
              {/* <h2>最佳账户{date_region}年收益额</h2> */}
              <h2>最佳账户2016-2017年收益额</h2>
              <p>Best performed account profit in 2016-2017</p>
            </>
          }
          >
            {/* <span className="profit">
              ${profit}
            </span> */}
            <span className="profit">
              $530000
            </span>
          </Card>
        </StyledrightRow>
      </StyledRow>
    );
  }
}
const mapStateToProps = state=>({
  team : state.get('team').toJS()
})
const mapDispatchToProps = dispatch => ({
  init(){
    dispatch(actionCreators.info())
  }
})
export default connect(mapStateToProps,mapDispatchToProps) (Profit)

import React from 'react';
import { connect } from 'react-redux';
import {  Col, Card } from 'antd';
import {StyledRow ,StyledrightRow} from 'account/subpage/profit/style';
import Spinner from 'account/subpage/profit/components/Spinner';
import TradedCharts from './components/TradedCharts';
import PChart from './components/PChart';
import {
  getKindCount,
  getTradeList,
  UserTradeInfo
} from './store/actionCreators';
import InfiniteList from './components/InfiniteList';
class Assortment extends React.Component {
  componentWillMount() {
    const {
      TradeData,
      TradeList,
      TradePage,
      kindName,
      selectedKeys
    } = this.props.assortment;

    !TradeData.length && this.props.getData(selectedKeys);
    !TradeList.length && this.props.getTradeList(TradePage);
    !kindName && this.props.getUserTradeInfo();
  }

  render() {
    const {
      TradeData,
      TradeList,
      TradePage,
      tradeCount,
      rate,
      kindName,
      count,
      selectedKeys,
      totalPage
    } = this.props.assortment;
    const { getTradeList, setStore } = this.props;
    const DropdownProps = {
      selectedKeys,
      getData: key => {
        setStore({
          selectedKeys: key
        });
        this.props.getData(key);
      }
    };
    const TradedProps = {
      data: TradeData
    };
    const InfiniteListProps = {
      getData: getTradeList,
      listData: TradeList,
      page: TradePage,totalPage
    };
    const PChartProps = {
      data: [
        { kindName, rate: rate - 0, count },
        { kindName: 'null', rate: 100 - rate, count }
      ]
    };
    return (
      <StyledRow type="flex" >
        <Col lg={16} md={24} >
          <Card
            bordered={false}
            title={
              <>
                <h2>各品种交易数量</h2>
                <p>Number of varieties traded</p>
              </>
            }
            extra={<Spinner {...DropdownProps} />}
            headStyle={{
              padding: '0 27px',
              color: '#fff',
              border: 'none'
            }}
          >
            {TradedProps.data.length !== 0 && <TradedCharts {...TradedProps} />}
          </Card>
        </Col>
        <StyledrightRow lg={8} md={24} >
          <Card
            
            title={
              <>
                <h2>历史交易详情</h2>
                <p>Historical trading details</p>
              </>
            }
          
          >
            <InfiniteList {...InfiniteListProps} />
          </Card>
          <Card 
          
          title={
            <>
              <h2>今日累计交易{tradeCount}次</h2>
              <p>Today's accumulated trading times</p>
            </>
          }
          >
            {kindName && <PChart {...PChartProps} />}
          </Card>
        </StyledrightRow>
      </StyledRow>
    );
  }
}
const mapStateToProps = state => ({
  assortment: state.get('assortment').toJS(),
  
});
const mapDispatchToProps = dispatch => ({
  getData(key) {
    dispatch(getKindCount(key));
  },
  getTradeList(page = 1) {
    dispatch(getTradeList(page));
  },
  getUserTradeInfo() {
    dispatch(UserTradeInfo());
  },
  setStore(payload) {
    dispatch({ type: 'assortment/UserTradeInfo', list: payload });
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assortment);

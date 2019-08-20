import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import {StyledRow ,StyledrightRow} from 'account/subpage/profit/style'
import store from 'store';
import AChart from 'account/subpage/profit/components/AChart';
import Spinner from 'account/subpage/profit/components/Spinner';
import { getCount, RateInfo, tradeLog } from './store/actionCreators';
import BCharts from './components/BCharts';
import InfiniteList from 'account/subpage/assortment/components/InfiniteList';
import * as constants from './store/constants';
class Amount extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: store.get('selectedKeys') || 'days',
      TradePage: this.props.amount.Page
    };
  }

  componentWillMount() {
    const {
      countList,
      total,
      articleList,
      selectedKeys,
      articlePage
    } = this.props.amount;
    !countList.length && this.props.getCount(selectedKeys);
    !total && this.props.RateInfo();
    !articleList.length && this.props.tradeLog(articlePage);
  }

  render() {
    const {
      countList: Adata,
      total,
      loseRate,
      lose,
      win,
      winRate,
      articlePage,
      articleList,
      selectedKeys
    } = this.props.amount;
    const {theme} =this.props
    const DropdownProps = {
      selectedKeys,
      getData: key => {
        this.props.setStore({
          selectedKeys: key
        });
        this.props.getCount(key);
      }
    };

    const InfiniteListProps = {
      page: articlePage,
      listData: articleList,
      getData: this.props.tradeLog
    };
    const AChartProps = {
      data: Adata
    };
    // 获胜百分比
    const winProps = {
      data: [
        {
          name: 'win',
          nv: win,
          total,
          rate: winRate,
          title: '获胜百分比'
        }
      ],
      value: 'win',
      theme
    };
    // 失利
    const lostProps = {
      data: [
        {
          name: 'lose',
          nv: lose,
          title: '失利百分比',
          rate: loseRate,
          total
        }
      ],
      value: 'lose',theme
    };
    //今日
    const totalProps = {
      data: [
        {
          name: 'total',
          nv: total,
          total,
          rate: total === 0 ? 0 : 100,
          title: '今日交易笔数'
        }
      ],
      value: 'total',theme
    };
    return (
      <StyledRow type="flex">
        <Col lg={16} md={24} >
          <Card
            bordered={false}
            title={
              <>
                <h2>交易次数</h2>
                <p>Number of transactions</p>
              </>
            }
            extra={<Spinner {...DropdownProps} />}
            headStyle={{
              padding: '0 27px',
              color: '#fff',
              border: 'none'
            }}
          >
            {Adata.length > 0 && <AChart {...AChartProps} />}
          </Card>
        </Col>
        <StyledrightRow lg={8} md={24}>
          
          
                <Card
                  title={
                    <>
                      <h2>账户出入金日志</h2>
                      <p>Deposit & Withdraw</p>
                    </>
                  }
                >
                  <InfiniteList {...InfiniteListProps} />
                </Card>
           
            <Card className="card-right-bottom bar">
              <Row gutter={8} className="amountRightBrow">
                <Col span={8}>
                  {total !== undefined && <BCharts {...winProps} />}
                </Col>
                <Col span={8}>
                  {total !== undefined && <BCharts {...lostProps} />}
                </Col>
                <Col span={8}>
                  {total !== undefined && <BCharts {...totalProps} />}
                </Col>
              </Row>
            </Card>
        
        </StyledrightRow>
      </StyledRow>
    );
  }
}

const mapState = state => ({
  amount: state.get('amount').toJS(),
  theme:state.getIn(['header', 'theme'])
});

const mapDispatch = dispatch => ({
  getCount(key) {
    return dispatch(getCount(key));
  },
  RateInfo() {
    return dispatch(RateInfo());
  },
  tradeLog(page = 1) {
    return dispatch(tradeLog(page));
  },
  setStore(payload) {
    return dispatch({ type: constants.UPDATA, data: payload });
  }
});

export default connect(
  mapState,
  mapDispatch
)(Amount);

import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card,  } from 'antd';
import AChart from './components/AChart';
import PChart from './components/PChart';
import {StyledRow ,StyledrightRow} from './style'
import { actionCreators } from './store';
import Spinner from './components/Spinner';
import * as constants from './store/constants';
class Profit extends React.Component {
  componentWillMount() {
    const { profit } = this.props;
    const { HistoryInfoData, selectedKeys, trderInfo } = profit;
    if (!HistoryInfoData.length) {
      this.props.getData(selectedKeys);
    }
    if (!trderInfo.length) {
      this.props.info();
    }
  }
  render() {
    const {
      HistoryInfoData,
      trderInfo,
      realAmount,
      realNetValue,
      // realAmountDiffer,
      initInvestAmount,
      // realNetValueDiffer,
      selectedKeys
    } = this.props.profit;

    const areaChartProps = {
      data: HistoryInfoData,
      setDomain: [1450000, 2500000],
    };
    const pChartProps = {
      data: trderInfo
    };
    const DropdownProps = {
      selectedKeys,
      getData: key => {
        this.props.setStore({
          selectedKeys: key
        });
        this.props.getData(key);
      }
    };
    return (
      <StyledRow type="flex" >
        <Col lg={16} md={24} >
          <Card
            bordered={false}
            title={
              <>
                <h2>历史账户余额</h2>
                <p>Historical account balance</p>
              </>
            }
            extra={<Spinner {...DropdownProps} />}
            headStyle={{
              padding: '0 27px',
              color: '#fff',
              border: 'none'
            }}
          >
            {!!~~areaChartProps.data.length && <AChart {...areaChartProps} />}
          </Card>
        </Col>
        <StyledrightRow lg={8} md={24} >
          <Card title={<><h2>账户一览</h2><p>Account details</p></>}>
            <Row className="mt20">
              <Col span={14}>
                <div className="mb20 text-right fz22">{realAmount}</div>
                <div className="mb20 text-right fz18">{realNetValue}</div>
                <div className="mb20 text-right fz16">{initInvestAmount}</div>
              </Col>
              <Col span={10}>
                <Row
                  className="mb20"
                  type="flex"
                  justify="space-between"
                  align="middle"
                >
                  <Col span={5}>
                    <i className="icon-rise-large vm mr5" />
                  </Col>
                  <Col span={19}>
                    <span className="vm fz22">&nbsp;</span>
                    <span className="vm">账户余额</span>
                  </Col>
                </Row>
                <Row
                  className="mb20"
                  type="flex"
                  justify="space-between"
                  align="middle"
                >
                  <Col span={5}>
                    <i className="icon-rise-small vm" />
                  </Col>
                  <Col span={19}>
                    <span className="vm fz18">&nbsp;</span>
                    <span className="vm">实时净值</span>
                  </Col>
                </Row>
                <Row
                  className="mb20"
                  type="flex"
                  justify="space-between"
                  align="middle"
                >
                  <Col span={5} />
                  <Col span={19}>
                    <span className="vm fz14">&nbsp;</span>初始投资额
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
          <Card title={<><h2>各个种类累积交易次数</h2><p>Accumulated trading times</p></>}>
            {!!~~pChartProps.data.length && <PChart {...pChartProps} />}
          </Card>
        </StyledrightRow>
      </StyledRow>
    );
  }
}
const mapStateToProps = state => ({
  profit: state.get('Profit').toJS()
});
const mapDispatchToProps = dispatch => ({
  getData(type) {
    dispatch(actionCreators.getData(type));
  },
  info() {
    dispatch(actionCreators.info());
  },
  setStore(payload) {
    dispatch({ type: constants.UPDATESTATE, data: payload });
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profit);

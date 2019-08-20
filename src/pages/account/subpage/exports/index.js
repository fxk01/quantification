import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col, Card, Spin, Button, message } from 'antd';
// import SelectDate from './components/SelectDate';
import RangePicker from './components/rangePicker';
import OrderList from './components/OrderList';
import { getUserReport } from './store/actionCreators';
import { UPDATESTATE } from './store/constants';
import api from 'api';
import {apiPrefix} from 'utils/config'
// import html2Canvas from 'html2canvas'
// import jsPDF from 'jspdf'
import { Content } from './style';

// Native intercept
// import downloadFile from '../../../../utils/toNative';

const downloadFile = (url, filename)=> {

}

// window.downloadFile = downloadFile



class Exports extends React.PureComponent {
  state = {
    startValue: null,
    endValue: null,
    historyTradeList: [],
    positionOrderList: [],
    loading: false,
    downloadBegin:null,
    downloadEnd :null,
  };


  

  
  dataFormat(s) {
    let d = new Date(s);
    let year = d.getFullYear();
    let month = change(d.getMonth()+1);
    let day = change(d.getDate());
    let hour = change(d.getHours());
    let minute = change(d.getMinutes());
    let second = change(d.getSeconds());
    function change(t){
      if(t<10){
        return "0"+t;
      }else{
        return t;
      }
    }
    return year+'-'+month+'-'+day+' '+hour+':'+minute+':'+second;
  }

  upData = (downloadBegin,downloadEnd) =>{
    this.setState({
      downloadBegin:downloadBegin.format('YYYY-MM-DD')
      ,downloadEnd:downloadEnd.format('YYYY-MM-DD')
    })
  }

  render() {
    const { exportSorte, profit,  theme } = this.props;
    const { realAmount, realNetValue, initInvestAmount } = profit;
    const { startValue, endValue } = exportSorte;
    const { positionOrderList, historyTradeList } = this.state;
    const historyProps = {
      dataSource: historyTradeList,
      columns: [
        {
          title: '订单号',
          dataIndex: 'orderNo',
          key: 'orderNo',
          width: '80px'
        },
        {
          title: '开仓时间',
          dataIndex: 'openTime',
          key: 'openTime',
          width: '120px'
        },
        {
          title: '开仓类型',
          dataIndex: 'openType',
          key: 'openType',
          width: '60px'
        },
        {
          title: '开仓手数',
          dataIndex: 'openCount',
          key: 'openCount',
          width: '60px'
        },
        {
          title: '品种',
          dataIndex: 'kind',
          key: 'kind',
          width: '60px'
        },
        {
          title: '开仓价格',
          dataIndex: 'openPrice',
          key: 'openPrice',
          width: '60px'
        },
        {
          title: '平仓时间',
          dataIndex: 'closeTime',
          key: 'closeTime',
          width: '110px'
        },
        {
          title: '平仓利润',
          dataIndex: 'closeProfit',
          key: 'closeProfit'
        }
      ]
    };

    const positionProps = {
      dataSource: positionOrderList,
      columns: [
        {
          title: '订单号',
          dataIndex: 'orderNo',
          key: 'orderNo',
          width: '80px'
        },
        {
          title: '开仓时间',
          dataIndex: 'openTime',
          key: 'openTime',
          width: '120px'
        },
        {
          title: '开仓类型',
          dataIndex: 'openType',
          key: 'openType',
          width: '80px'
        },
        {
          title: '开仓手数',
          dataIndex: 'openCount',
          key: 'openCount',
          width: '80px'
        },
        {
          title: '品种',
          dataIndex: 'kind',
          key: 'kind',
          width: '80px'
        },
        {
          title: '开仓价格',
          dataIndex: 'openPrice',
          key: 'openPrice',
          width: '80px'
        },
        {
          title: '平仓利润',
          dataIndex: 'closeProfit',
          key: 'closeProfit'
        }
      ]
    };
    const getUserReport = (startValue, endValue) => {
      this.setState({ startValue, endValue, loading: true });
      api
        .getUserReportData({
          start_date: startValue.format('YYYY-MM-DD'),
          end_date: endValue.format('YYYY-MM-DD')
        })
        .then(res => {
          this.setState({
            historyTradeList: res.data.historyTradeList,
            positionOrderList: res.data.positionOrderList,
            loading: false
          });
        });
    };
    const {upData} =  this
    const selectDateProps = {
      startValue,
      endValue,
      getUserReport,
      upData
    };
    return (
      <Content type="flex" theme={theme}>
        {this.state.loading && (
          <div className="demo-loading-container">
            <Spin />
          </div>
        )}
        <Col lg={24} md={24}>
          <Card
            bordered={false}
            title={
              <>
                <h2>账户数据报告</h2>
                <p>Account data report</p>
              </>
            }
            extra={<RangePicker {...selectDateProps} />}
            headStyle={{
              color: '#fff',
              border: 'none'
            }}
          >
            <Card
              className="top-card"
              bodyStyle={{
                width: '85%',
                padding: '0'
              }}
            >
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
                    <Col span={2}>
                      <i className="icon-rise-large vm mr5" />
                    </Col>
                    <Col span={22}>
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
                    <Col span={2}>
                      <i className="icon-rise-small vm" />
                    </Col>
                    <Col span={22}>
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
                    <Col span={2} />
                    <Col span={22}>
                      <span className="vm fz14">&nbsp;</span>初始投资额
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card title={<h2>持仓订单</h2>} className="table-card ">
              <OrderList type="position" {...positionProps} />
            </Card>
            <Card title={<h2>历史交易</h2>} className="table-card " style={{marginTop: '20px'}}>
              <OrderList type="history" {...historyProps} />
            </Card>
            <Row
              type="flex"
              justify="end"
              style={{
                marginTop: '20px'
              }}
            >
              <Col>
                <Button
                  type="primary"
                  // size="small"
                  icon="download"
                  onClick={() =>
                   {
                    
                    this.state.downloadBegin && this.state.downloadEnd ?
                    window.downloadFile(
                      `${apiPrefix}exportReportData?token=${
                        JSON.parse(localStorage.getItem('user')).token
                      }&start_date=${this.state.downloadBegin}&end_date=${this.state.downloadEnd}`,
                      'myfilename.pdf'
                    )
                    : message.info('请先选择开始时间和结束时间！')
                   }
                  }
                  className="download"
                >
                  Download
                </Button>
                
              </Col>
            </Row>
          </Card>
        </Col>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  exportSorte: state.get('exports').toJS(),
  profit: state.get('Profit').toJS(),
  theme: state.getIn(['header', 'theme']),
  downloadBegin: state.getIn(['exports', 'downloadBegin']),
  downloadEnd: state.getIn(['exports', 'downloadEnd'])
});
const mapDispatchToProps = dispatch => ({
  getUserReport(payload) {
    return dispatch(getUserReport(payload));
  },
  updata(payload) {
    return dispatch({ type: UPDATESTATE, payload });
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exports);

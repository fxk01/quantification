import React from 'react';
import { connect } from 'react-redux';
import { DatePicker, LocaleProvider } from 'antd';
import { actionCreators } from '../store'
import 'moment/locale/zh-cn';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import {DateBox} from './style'

class RangePicker extends React.PureComponent {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false
  };

  disabledStartDate = startValue => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };
  disabledEndDate = endValue => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };
  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
    
    const { startValue } = this.state;
    if(startValue) {
      this.props.getUserReport(startValue, value);
      this.props.upData(startValue, value)
    }
    
    
    
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  render() {
    const dateFormat = 'YYYY-MM-DD';
    const { startValue, endValue, endOpen } = this.state;
    return (
    
      <LocaleProvider locale={zh_CN}>
        <DateBox>
          <DatePicker
            className="export-datepicker"
            dropdownClassName="export-dropdown"
            disabledDate={this.disabledStartDate}
            format={dateFormat}
            value={startValue}
            placeholder="开始时间"
            onChange={this.onStartChange}
            onOpenChange={this.handleStartOpenChange}
            showToday={false}
          />
          <DatePicker
            className="export-datepicker"
            dropdownClassName="export-dropdown"
            disabledDate={this.disabledEndDate}
            format={dateFormat}
            value={endValue}
            placeholder="结束时间"
            onChange={this.onEndChange}
            open={endOpen}
            showToday={false}
            onOpenChange={this.handleEndOpenChange}
          />
        </DateBox>
      </LocaleProvider>
    );
  }
}


const mapStateToProps = state => ({
  // exportSorte: state.get('exports').toJS(),
  // profit: state.get('Profit').toJS(),
  // theme: state.getIn(['header', 'theme'])
});
const mapDispatchToProps = dispatch => ({
  handleDownloadBegin(value) {
		dispatch(actionCreators.downloadBegin(value));
  },
  handleDownloadEnd(value) {
		dispatch(actionCreators.downloadEnd(value));
	},
  // getUserReport(payload) {
  //   return dispatch(getUserReport(payload));
  // },
  // updata(payload) {
  //   return dispatch({ type: UPDATESTATE, payload });
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RangePicker);

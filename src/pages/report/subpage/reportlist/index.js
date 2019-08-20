import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getData } from './store/actionCreators';
import InfiniteList from './components/InfiniteList';
import { FlexWrap, ReportListWrap } from './style.js';

class Reportlist extends PureComponent {
  componentWillMount() {

    const  { listData,page, } = this.props.report
    
    !listData.length&&this.props.getData({
      page,
     
    });
  }

  render() {
    const { theme } = this.props;
    const  { listData,page,selectedKeys, } = this.props.report
    const {dispatch,} = this.props
    
   
    const listPropos = {
      listData,page,dispatch,selectedKeys
    }

    return (
      <FlexWrap>
        <ReportListWrap theme={theme}>
            <InfiniteList {...listPropos} />
        </ReportListWrap>
      </FlexWrap>
    );
  }
}

const mapState = state => ({
  report: state.get('report').toJS(),
  theme: state.getIn(['header', 'theme'])
});

const mapDispatch = dispatch => ({
  getData(payload) {
    return dispatch(getData(payload));
  },
  dispatch,
});

export default connect(
  mapState,
  mapDispatch
)(Reportlist);

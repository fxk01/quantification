import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import store from 'store';
import Header from '../common/header';
import { LoginWrapper, BgWrapper } from './style';
const user = store.get('user');
const { uid, token } = user ? user : {};



class PrimaryWrap extends Component {
  componentWillMount() {
    this.props.query({uid,token})
  }

  render() {
  
    const { theme } = this.props;
    
    
    const { pathname } = this.props.history.location;
    const regLogin = new RegExp(/login/);
    const regReportdetail = new RegExp(/reportdetail/);

    let primaryLayout;
    if (pathname.match(regLogin)) {
      primaryLayout = (
        <LoginWrapper>{this.props.children}</LoginWrapper>
      )
    } 
    
    else {
      primaryLayout = (
        <BgWrapper theme={theme}>
          {pathname.match(regReportdetail) ? '' : <Header />}
          {this.props.children}
        </BgWrapper>
      )
    }

    return (
      
      <>
        {primaryLayout}
      </>
    );
  }
}
const mapStateToProps = state => ({
  app: state.get('app').toJS(),
  theme: state.getIn(['header', 'theme'])
});
const mapDispatchToProps = dispatch => ({
  query(payload) {
    dispatch(actionCreators.query(payload));
  },
  setupHistory(history) {
    dispatch(actionCreators.setupHistory(history));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
  undefined,
  { pure: false }
)(PrimaryWrap);

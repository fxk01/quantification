import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { List, Icon } from 'antd';
import LazyLoad from './components/LazyLoad';
import { TopBar, PdfWrapper } from './style.js';
import api from 'api';
const { reportDetail } = api;

class Reportdetail extends PureComponent {
  state = {
    loading: false,
    locale: {
      emptyText: ' '
    },
    data: [

		]
  };

  componentDidMount() {
    const pid = this.props.match.params.id;
    
		reportDetail({pid}).then(res=>{
			if(~~res.code===1){
				this.setState({
          loading: false,
					data: res.data
				})
			} else {
        this.setState({
          loading: false,
					locale: {
            emptyText: '暂无数据'
          }
				})
      }
		})
  }

  render() {
    const { theme } = this.props;
   
    return (
      <>
        <TopBar theme={theme}>
        <Link to={'/report/reportlist'} style={{color:"#fff"}}>
          <Icon type="left" />返回
        </Link>
        <span>{this.props.location.state.name}</span>
     <span></span>
        </TopBar>
        <PdfWrapper theme={theme}>
          <List
            itemLayout="vertical"
            dataSource={this.state.data}
            //loading={this.state.loading}
            locale={this.state.locale}
            renderItem={item => (
              <List.Item style={{border:"none"}}>
                <LazyLoad dataSrc={item} />
              </List.Item>
            )}
          />
        </PdfWrapper>
      </>
    );
  }
}

const mapState = state => ({
  theme: state.getIn(['header', 'theme'])
});




export default withRouter(connect(
  mapState,
)(Reportdetail))

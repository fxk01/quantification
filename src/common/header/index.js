import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store from 'store'
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/subpage/loginlanding/store';
import { Popover, Menu, Dropdown, Icon } from 'antd';
import styleBlue from '../../statics/images/style_a.png';
import styleDark from '../../statics/images/style_b.png';
import {
	HeaderWrapper,
	Logo,
	UserAciton,
	IconSwitchStyle,
	IconUser
} from './style';







const oneMenu = {
	account: '1',
	team: '2',
	quotations: '3',
	news: '4',
	report: '5',
};

class Header extends Component {
	constructor() {
		super();
		this.state = {
			selectedKeys: '1'
		}
	}

	componentWillMount() {
    this.updateKeyState();
	}

  componentWillReceiveProps() {
    this.updateKeyState();
  }

  updateKeyState() {
    let path = window.location.href.split('/')[3];
    for(let k in oneMenu) {
      if(k.indexOf(path) !== -1) {
        this.setState({
          selectedKeys: oneMenu[k]
        });
      }
    }
	}

	render() {
		const {   theme, handleChangeToThemeBlue, handleChangeToThemeDark, logout } = this.props;
		const user =  store.get('user') || "";
		const menu = (
			<Menu>
				<Menu.Item key="0">
					<a href="javascript:;" onClick={() => logout()} style={{paddingTop:"0",paddingBottom:"0",lineHeight: "1"}}>退出</a>
				</Menu.Item>
			</Menu>
		);

		const content = (
			<div>
			  <div>
				  <a href="javascript:;" style={{ display: 'inline-block', marginRight: 25 }}
					
					onClick={() => handleChangeToThemeBlue()}
				  >
				  <img src={styleBlue} alt="" width="134" height="98" />
				  </a>
				  
				  <a href="javascript:;" style={{ display: 'inline-block' }}
					
					onClick={() => handleChangeToThemeDark()}
				  >
				  <img src={styleDark} alt="" width="134" height="98" />
				  </a>
			  </div>
			</div>
		);
		return (
			<>
			<HeaderWrapper theme={theme}>
				<Logo/>
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={[this.state.selectedKeys]}
          selectedKeys={[this.state.selectedKeys]}
					style={{ padding: '20px 0 0 0',lineHeight: '1.4', backgroundColor: 'transparent' }}
				>
					<Menu.Item key="1"><Link to='/account'>账户<span style={{display: 'block', fontSize: '8px'}}>ACCOUNT</span></Link></Menu.Item>
					<Menu.Item key="2"><Link to='/team'>团队<span style={{display: 'block', fontSize: '8px'}}>OUR TEAM</span></Link></Menu.Item>
					<Menu.Item key="3"><Link to='/quotations'>行情<span style={{display: 'block', fontSize: '8px'}}>QUOTATIONS</span></Link></Menu.Item>
					<Menu.Item key="4"><Link to='/news'>新闻<span style={{display: 'block', fontSize: '8px'}}>NEWS</span></Link></Menu.Item>
					<Menu.Item key="5"><Link to='/report'>研报<span style={{display: 'block', fontSize: '8px'}}>REPORT</span></Link></Menu.Item>
				</Menu>
				{
						<UserAciton className='right'>
							<Popover placement="bottomRight" content={content} trigger="click">
							<IconSwitchStyle/>
							</Popover>
							<Dropdown overlay={menu} trigger={['click']}>
								<span className="ant-dropdown-link">
								<span style={{verticalAlign: 'middle'}}>{user.uname}</span> <Icon type="caret-down" style={{ fontSize: '13px', verticalAlign: 'middle' }} /> <IconUser/>
								</span>
							</Dropdown>
						</UserAciton> 
				}
			</HeaderWrapper>
			</>
		);
	}
}


const mapStateToProps = (state) =>({
	theme: state.getIn(['header', 'theme']),
	loggedIn : state.getIn(["loginlanding", "loggedIn"]),
	user : state.getIn(["loginlanding", "user"]).toJS()
});
const mapDispatchToProps = dispatch => ({
	handleChangeToThemeBlue() {
		dispatch(actionCreators.changeToThemeBlue());
	},
	handleChangeToThemeDark() {
		dispatch(actionCreators.changeToThemeDark());
	},
	logout() {
		dispatch(loginActionCreators.handLogout())
	}
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Header))

import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import SecondaryWrap from '@/containers/secondaryWrap';
import Sidenav from '../../common/sidenav';

const menuData = [
	{
		path: '/account/profit',
		iconName: 'icon-sidenav-profit',
		name: '资金收益',
		keys: '0',
    sub: '0',
	},
	{
		path: '/account/assortment',
		iconName: 'icon-sidenav-assortment',
		name: '交易品种',
		keys: '1',
    sub: '1',
	},
	{
		path: '/account/amount',
		iconName: 'icon-sidenav-amount',
		name: '交易量',
		keys: '2',
		sub: '2',
	},
	{
		path: '/account/exports',
		iconName: 'icon-sidenav-exports',
		name: '导出',
		keys: '3',
		sub: '3'
	},
];

class Account extends PureComponent {
  render() {
  	return (
  			<SecondaryWrap transmitChildren={this.props.children} breadcrumbText='我的账户 ACCOUNT'>
				<Sidenav menuData={menuData} />
			</SecondaryWrap>
		)
  }
}

export default withRouter(Account);
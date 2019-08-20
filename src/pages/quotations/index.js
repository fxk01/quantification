import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'

import SecondaryWrap from '@/containers/secondaryWrap';


import Sidenav from '../../common/sidenav';


const menuData = [
	{
		path: '/quotations/stockindex',
		iconName: 'icon-sidenav-stockindex',
	  	name: '股指',
        keys: '0',
	},
	{
		path: '/quotations/exchange',
		iconName: 'icon-sidenav-exchange',
	  	name: '外汇',
		keys: '1',
	},
	{
		path: '/quotations/calendar',
		iconName: 'icon-sidenav-calendar',
	  	name: '经济日历',
		keys: '2',
	},

];



class Quotations extends PureComponent {
	render() {
		return (
			<SecondaryWrap transmitChildren={this.props.children} breadcrumbText='行情 QUOTATIONS'>
				<Sidenav menuData={menuData} />
			</SecondaryWrap>
		)
	}
}
export default withRouter(Quotations);

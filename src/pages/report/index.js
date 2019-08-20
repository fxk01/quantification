import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import SecondaryWrap from '@/containers/secondaryWrap';


import Sidenav from '../../common/sidenav';


const menuData = [
	{
		path: '/report/reportlist',
		iconName: 'icon-sidenav-report',
	  	name: '研报列表',
        keys: '0',
	}
];



class Report extends PureComponent {

	render() {

		return (
			<SecondaryWrap transmitChildren={this.props.children} breadcrumbText='研报 REPORT'>
				<Sidenav menuData={menuData} />
			</SecondaryWrap>
		)
	}



}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

});

export default withRouter(connect(mapState, mapDispatch)(Report));

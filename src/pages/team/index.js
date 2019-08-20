import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import SecondaryWrap from '@/containers/secondaryWrap';


import Sidenav from '../../common/sidenav';


const menuData = [
	{
		path: '/team/achievement',
		iconName: 'icon-sidenav-achievement',
	  	name: '团队成就',
        keys: '0',
	},
	{
		path: '/team/outstanding',
		iconName: 'icon-sidenav-outstanding',
	  	name: '卓越时刻',
		keys: '1',
	}

];



class News extends PureComponent {

	render() {

		return (
			<SecondaryWrap transmitChildren={this.props.children} breadcrumbText='团队 OUR TEAM'>
				<Sidenav menuData={menuData} />
			</SecondaryWrap>
		)
	}



}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

});

export default withRouter(connect(mapState, mapDispatch)(News));

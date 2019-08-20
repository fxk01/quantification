import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import SecondaryWrap from '@/containers/secondaryWrap';


import Sidenav from '../../common/sidenav';


const menuData = [
	{
		path: '/news/newslist',
		iconName: 'icon-sidenav-news',
	  	name: '全球快讯',
        keys: '0',
	}
];



class News extends PureComponent {

	render() {

		return (
			<SecondaryWrap transmitChildren={this.props.children} breadcrumbText='新闻 NEWS'>
				<Sidenav menuData={menuData}  />
			</SecondaryWrap>
		)
	}



}

const mapState = (state) => ({
	theme:state.getIn(['header', 'theme'])
})

const mapDispatch = (dispatch) => ({

});

export default withRouter(connect(mapState, mapDispatch)(News));

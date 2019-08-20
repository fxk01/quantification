import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


import SecondaryWrap from '@/containers/secondaryWrap';









class Login extends PureComponent {

	

	render() {

		return (
			
			<SecondaryWrap transmitChildren={this.props.children}>
				
				
			</SecondaryWrap>
		)
	}

	

}

const mapState = (state) => ({
	
})

const mapDispatch = (dispatch) => ({
	
});

export default withRouter(connect(mapState, mapDispatch)(Login));

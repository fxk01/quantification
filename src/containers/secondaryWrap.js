import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd';
const { Sider } = Layout;
class SecondaryWrap extends PureComponent {
	render() {
		const {pathname } = this.props.history.location
		const regLogin = new RegExp(/login/);
		const regReportdetail = new RegExp(/reportdetail/);

		let secondaryLayout;
		if(pathname.match(regLogin)){
			secondaryLayout = (
			<>{this.props.transmitChildren}</>
		)
		}
		else if(pathname.match(regReportdetail)){
			secondaryLayout = (
			<>{this.props.transmitChildren}</>
		)
		}
		else {
			secondaryLayout = (
			<>
				<Breadcrumb style={{ margin: '0', padding: '20px 15px 10px', fontSize: '20px', flex: '0 0 60px' }}>
					<Breadcrumb.Item>{this.props.breadcrumbText}</Breadcrumb.Item>
					
				</Breadcrumb>
				<Layout className="container">
					<Sider width={80}>
			{this.props.children}
					</Sider>
					
					{this.props.transmitChildren}
					
				</Layout>
			</>
		)
		}
		return (
			<>
				{secondaryLayout}
			</>
		)
	}
}

export default withRouter(SecondaryWrap);

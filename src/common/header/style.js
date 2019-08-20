import styled, { injectGlobal } from 'styled-components';
import logoPic from '../../statics/images/logo.png';
import iconSwitchStyle from '../../statics/images/icon_switch_style.png';
import iconUser from '../../statics/images/icon_user.png';




export const HeaderWrapper = styled.div`
	flex: 0 0 80px;
	z-index: 1;
	position: relative;
	padding: 0 140px 0 100px;

	background-color: transparent;

	

	.ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
		background-color: transparent;
	}

	.ant-menu-dark .ant-menu-item, .ant-menu-dark .ant-menu-item-group-title, .ant-menu-dark .ant-menu-item > a {
		color: #fff;
		text-align: center;
	}

	.ant-menu-dark .ant-menu-item-selected > a, .ant-menu-dark .ant-menu-item-selected > a:hover {
		color: #209fd2;
	}

	

	

	
`;


export const Logo = styled.div`
	position: absolute;
	top: 31px;
	left: 30px;
	display: block;
	width: 52.21px;
	height: 44px;
	background: url(${logoPic});
	background-size: contain;
`;

export const UserAciton = styled.div`
	position: absolute;
	top: 40px;
	right: 10px;
	line-height: 40px;
	padding: 0 15px;
	font-size: 16px;
	color: #fff;

	
`;

export const IconSwitchStyle = styled.i`
	display: inline-block;
	width: 14px;
	height: 17.89px;
	margin-right: 50px;
	background-image: url(${iconSwitchStyle});
	background-size: contain;
	vertical-align: middle;
`;

export const IconUser = styled.i`
	display: inline-block;
	width: 14px;
	height: 16.8px;
	background-image: url(${iconUser});
	background-size: contain;
	vertical-align: middle;
`;


injectGlobal`
	.ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow {
		border-color: #0e1c2c;
	}
	/* .ant-popover .ant-popover-arrow {
		background-color: ${props => props.theme === 'blue' ? '#0e1c2c' : '#1d1f25'};
		
	} */
	.ant-popover .ant-popover-inner {
		/* background-color: ${props => props.theme === 'blue' ? '#0e1c2c' : '#1d1f25'}; */
		background-color: #0e1c2c;
	}
	
`

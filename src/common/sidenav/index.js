import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
const themes = {
  'blue' : '#163a5e',
  'dark' : '#31343b'
}
class Sidenav extends Component {
  constructor(props) {
    super(props);
    // const {location,menuData } =this.props
    // const {pathname} = location

    this.state = {
      selectKey:0
    }
  }

  componentWillMount() {

  	// this.updateKeyState(this.props.menuData);
  }

  componentWillReceiveProps() {
  	// this.updateKeyState(this.props.menuData);
  }

  // updateKeyState(data) {
  //   console.log(this.props)
  //   data.forEach((obj) => {
  //     let selectMenu = window.location.href.split('/')[4];
  //     if(obj.path.indexOf(selectMenu) !== -1) {
  //       this.setState({
  //         selectKey: obj.keys
  //       })
  //     } else if(selectMenu === undefined) {
  //       this.setState({
  //         selectKey: '0'
  //       })
  //     }
  //   });
  // }

	render() {
    const {theme} = this.props
		return (
      <>
      <div style={{
        "position":'absolute',
        "width" :'100%',
        "height" : "80px",
        "backgroundColor":`${themes[theme]}`,
        "transition" : 'transform .5s',
        "transform" : `translateY(${80*this.state.selectKey}px)`
      }}>
      </div>
			<Menu

				style={{ height: '100%' }}
			>
        {
          this.props.menuData.map((item, index) => {
            return (
              <Menu.Item key={index}>
                <Link to={item.path} onClick={()=>this.setState({
                  selectKey:index
                })}>
                  <i className={item.iconName}></i>
                  <span className="sidenav-text">{item.name}</span>
                </Link>
              </Menu.Item>
            );
          })
        }
			</Menu>
      </>
		);
	}
}

export default withRouter(connect(state=>({theme: state.getIn(['header', 'theme'])}))(Sidenav));
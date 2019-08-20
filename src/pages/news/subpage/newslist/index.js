import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { FlexWrap } from './style.js';

const themeObj = {
  blue: '163a5e',
  dark: '31343b'
};

class Newslist extends PureComponent {
  componentWillReceiveProps(nextProps) {
    this.container.src = `https://www.jin10.com/example/jin10.com.html?messageNum=20&fontSize=12px&backgroundColor=${
      themeObj[nextProps.theme]
    }&color=ffffff`;
  }

  componentDidMount() {
    this.container = document.createElement('iframe');
    this.container.frameBorder=0;
    this.container.width='100%';
    this.container.height=1200;
    this.container.frameBorder=0;
    this.container.scrolling='yes';
    this.container.style.verticalAlign="middle";
    this.container.style.opacity="0.8";

    ReactDOM.findDOMNode(this).appendChild(this.container);
    this.container.src = `https://www.jin10.com/example/jin10.com.html?messageNum=20&fontSize=12px&backgroundColor=${
      themeObj[this.props.theme]
    }&color=ffffff`;
  }
  componentWillUnmount() {
		this.container.parentNode.removeChild(this.container);
		this.container = null
  }
  render() {
    return <FlexWrap ref="warp" />;
  }
}
const mapState = state => ({
  theme: state.getIn(['header', 'theme'])
});
export default connect(mapState)(Newslist);

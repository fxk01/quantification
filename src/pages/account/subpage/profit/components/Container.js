import React from 'react';
import { ResponsiveContainer } from 'recharts';
import {ContainerStyle,Content} from './style';

class Container extends React.PureComponent {
  render() {
    const {
      minHeight = 400,
      ratio = 5 / 2,
      maxHeight = 400,
      children,
      left = false
    } = this.props;
    return (
      <ContainerStyle  style={{ minHeight, maxHeight }} left={left} >
        <div style={{ marginTop: `${100 / ratio}%` || '100%' }} />
        <Content  style={{ minHeight, maxHeight }}>
          <ResponsiveContainer >{children}</ResponsiveContainer>
        </Content>
      </ContainerStyle>
    );
  }
}


export default Container;

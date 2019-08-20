import React, { PureComponent } from 'react';
import { Tag} from './style'
class Details extends PureComponent {
  render() {
    const { time, oprType, kind, price } = this.props;
    return (
      <Tag  ref={ref => (this.tag = ref)}>
        <span>账户于</span>
        <span>{time}</span>
        <span>{oprType}</span>
        <span>{kind || '$' + price}</span>
      </Tag>
    );
  }
}

export default Details;

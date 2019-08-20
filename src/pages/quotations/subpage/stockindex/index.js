import React, { PureComponent } from 'react';
import Marketoverview from './components/Marketoverview';
import Stockmarket from './components/Stockmarket';
import { FlexRow } from '../../style';

import { Col } from 'antd';

class Stockindex extends PureComponent {
  render() {
    return (
      <>
        <FlexRow type="flex" gutter={16}>
          <Col className="gutter-row" span={14} style={{ height: '100%' }}>
            <Marketoverview />
          </Col>
          <Col className="gutter-row" span={10} style={{ height: '100%' }}>
            <Stockmarket />
          </Col>
        </FlexRow>
      </>
    );
  }
}

export default Stockindex;

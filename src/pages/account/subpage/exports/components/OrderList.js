import React, { PureComponent } from 'react';
import {Order} from './style'
class OrderList extends PureComponent {
  render() {
    const { dataSource, columns, type } = this.props;

    return (
      <Order >
        <thead className={type}>
          <tr>
            {columns.map(item => (
              <th width={item.width || ''} key={item.key}>
                {item.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(dataSource.length > 0 &&
            dataSource.map((item, index) => (
              <tr key={index}>
                {columns.map(_ => (
                  <td key={_.key}>{item[_.dataIndex]}</td>
                ))}
              </tr>
            ))) || (
            <tr>
              <td colSpan={columns.length}>暂无数据</td>
            </tr>
          )}
        </tbody>
      </Order>
    );
  }
}

export default OrderList;

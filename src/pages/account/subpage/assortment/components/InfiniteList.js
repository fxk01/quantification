import React from 'react';
import { message, Spin, Collapse } from 'antd';
import Details from './Details';
import { Container, Tag } from './style';
import InfiniteScroll from 'react-infinite-scroller';
const Panel = Collapse.Panel;
class InfiniteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hasMore: true
    };
  }
  handleInfiniteOnLoad = () => {
    this.setState({
      loading: true
    });
    this.props.getData(this.props.page);
  };
  componentWillReceiveProps(nextProps) {
    const { page, totalPage } = nextProps;
    totalPage !== 0 && totalPage === page && message.warning('没有更多数据了');
    this.setState({
      loading: false,
      hasMore: totalPage > page
    });
  }

  render() {
    const { page, listData } = this.props;
    return (
      <Container>
        <InfiniteScroll
          initialLoad={false}
          pageStart={page}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <Collapse accordion >
            {listData.map((item, index) => (
              <Panel
                key={index}
                showArrow={false}
                disabled={!item.kind}
                header={<Details {...item} />}
              >
                {item.kind && (
                  <Tag >
                    <span>订单号</span>
                    <span>{item.orderNo}</span>
                    <span>价格为</span>
                    <span>${item.price}</span>
                    <span>{item.openCount}手</span>
                  </Tag>
                )}
              </Panel>
            ))}
          </Collapse>
          {this.state.loading && this.state.hasMore && (
            <div className="demo-loading-container">
              <Spin />
            </div>
          )}
        </InfiniteScroll>
      </Container>
    );
  }
}

export default InfiniteList;

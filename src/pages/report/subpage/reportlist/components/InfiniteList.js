import React from 'react';
import { List, message, Button, Spin } from 'antd';
import  { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller';
import {Container} from './style';
import * as constants from '../store/constants'
import api from 'api'
const  { getReportList } = api

const downloadFile = (url, filename)=> {

}




class InfiniteList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hasMore: true,
    }
  }
  handleInfiniteOnLoad = () => {
    const { page,selectedKeys,dispatch} = this.props;
    this.setState({
      loading : true
    })
    getReportList({
      page:page+1,
      type:selectedKeys
    }).then(res=>{
      if(~~res.code === 1){
        const {listData ,totalPage, downloadPath}  =  res.data
        if(totalPage <= page+1){
          message.warning('没有更多了！');
          this.setState({
            hasMore: false,
            loading: false,
          });
        }
        dispatch({type:constants.REPORTLISTADDLIST,list:listData,nextPage:page+1})
        this.setState({
          loading: false,
        })
      }
    })
  };

  render() {
    const { page, listData} = this.props;
    return (
      <Container >
        <InfiniteScroll
          initialLoad={false}
          pageStart={page}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={listData}
            loading={this.state.loading }
            locale = {
             { emptyText : ' '}
            }
            renderItem={item => (
              <List.Item>
                <Link className='articleLink' to={{
                  pathname:`/report/reportdetail/${item.pid}`,
                  state : {name :item.report_name }
                }} > {item.report_name}</Link>
                <Button  type="primary" className='btnDownload'  icon="download" onClick={() =>
                    window.downloadFile(
                      item.downloadPath,
                      'reportfilename.pdf'
                    )
                  }>Download</Button>
              </List.Item>
            )}
          >
            {/* {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )} */}
          </List>
        </InfiniteScroll>
      </Container>
    );
  }
}

export default InfiniteList;

import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 42px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  .ant-list-empty-text {
    color: #fff;
  }
  .ant-list-split .ant-list-item {
    border: none;
    display: flex;
    height: 40px;
    line-height: 40px;
    background: #1e649e;
    margin-bottom: 10px;
    padding: 0 0 0 25px;
    border-radius: 8px;
    color: #fff;
    list-style: none;
    overflow: hidden;
    .articleLink {
      flex: 1;
      color: #fff;
    }
    .btnDownload {
      color: #fff;
      background: #0fab99;
      border: 0;
      padding: 0 15px;
      height: auto;
      border-radius: inherit;
    }
  }

  .demo-loading-container {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
  }
`;

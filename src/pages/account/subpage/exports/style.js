import styled from 'styled-components';
import { Row } from 'antd';

export const Content = styled(Row)`
  background-color: ${props =>
    props.theme === 'blue' ? ' rgba(22, 58, 94, .9)' : 'rgba(49,52,59,0.9)'};
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1;
  .demo-loading-container {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
    z-index: 5;
  }
  .download {
    width: 120px;
    height: 36px;
    background-color: #36d7c5;
    border-color: #36d7c5;

    &:hover,
    &:focus {
      background-color: #36d7c5;
      border-color: #36d7c5;
    }
  }
  .ant-card {
    border: none;
    background-color: transparent;
    color: #fff;
    min-height: 100%;

    .ant-card-head {
      border: none;

      .ant-card-head-title {
        color: #fff;
        h2 {
          color: #fff;
          margin-bottom: 0;
          font-size: 14px;
          font-weight: lighter;
        }
      }
    }

    .ant-card-extra {
      position: relative;
    }

    .ant-card-body {
      padding-top: 0;
    }
    .table-card.ant-card {
      .ant-card-head {
        padding: 0;
        min-height: 0;
      }

      .ant-card-head-title {
        text-align: right;
        padding: 0;
      }

      .ant-card-body {
        padding: 0;
        height: 100px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    }
  }
`;

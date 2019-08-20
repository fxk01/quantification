import styled from 'styled-components';

export const Container = styled.div`
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  max-height: 200px;
  .demo-loading-container {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    text-align: center;
  }
  .ant-collapse {
    background-color: transparent;
    border: none;
    .ant-collapse-item {
      padding: 0;
      border: 1px solid #b5b9bd;
      border-radius: 5px;
      margin: 4px 0;
      .ant-collapse-header {
        padding: 0 !important;
      }
      .ant-collapse-content.ant-collapse-content-active {
        background-color: transparent;
        border: none;
        color: #fff;

        .ant-collapse-content-box {
          padding: 0;
        }
      }
    }
  }
  .ant-collapse > .ant-collapse-item:last-child,
  .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
    border-radius: 4px;
  }
`;

export const Tag = styled.div`
  color: #fff;
  padding: 2px 5px;
  font-size: 11px;
  display: flex;
  justify-content: space-between;
`;

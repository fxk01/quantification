import styled from 'styled-components';
export const StyledOutstanding = styled.div`
  background-color: ${props =>
    props.theme === 'blue' ? ' rgba(22, 58, 94, .9)' : 'rgba(49,52,59,0.9)'};
  overflow-x: hidden;
  -ms-flex: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  .ant-card {
    display: flex;
    flex-direction: column;
    background: transparent;
    .ant-card-body {
      flex: 1;
      font-size: 11px;
    }
  }
  .history {
    flex: 1;
    .ant-card-body {
      flex: 1;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
  .terms {
    color: #fff;
    li {
      line-height: 1.5;
    }
  }
  .ant-card-head-title h2 {
    color: #fff;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: lighter;
  }
`;

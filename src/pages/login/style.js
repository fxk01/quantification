import styled, { injectGlobal, css } from 'styled-components';

export const Copyright = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: #666;
  padding: 20px;
  font-size: 12px;
`;

export const StyledForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => (props.login ? '338px' : '700px')};
  ${props =>
    props.login &&
    css`
      p {
        color: #ffffff;
        text-align: center;
        margin: 45px 0 20px;
        font-size: 20px;
        letter-spacing: 1px;
      }
    `}
  .formTitle {
    color: #ffffff;
    text-align: center;
    margin-bottom: 70px;
    font-size: 28px;
  }
  button {
    width: 100%;
    height: 48px;
    border-radius: 2px;
    background: #000000;
    color: #fff;
    border: none;
  }
  .ant-form-item {
    margin-bottom: 20px;
  }
  .ant-input {
    height: 48px;
    border-radius: 2px;
    background-color: #494949;
    border-color: #494949;
    color: #fff;
    font-size: 18px;
  }
  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border-color: #2e3848;
  }
  .ant-btn-primary {
    height: 48px;
    border-radius: 2px;
    background-color: #000000;
    border-color: #000000;
    font-size: 18px;
  }
  .ant-form-item-label {
    text-align: left;
    line-height: 48px;
    label {
      color: #cccccc;
    }
  }
  .ant-btn:hover,
  .ant-btn:focus,
  .ant-btn:active,
  .ant-btn.active {
    background: #0a1727;
  }
  .ant-btn:hover,
  .ant-btn:focus {
    color: #fff;
  }
  .ant-form-item-required:before {
    display: none;
  }
`;

injectGlobal`
   .color-white {
      color: #fff !important;
    }
    .color-gray {
      color: #ccc !important;
    }
    .color-blue {
      color: #0a1727 !important;
    }
    .mt20 {
      margin-top: 20px !important;
    }
    .ml10 {
      margin-left: 10px !important;
    }
    .mr10 {
      margin-right: 10px !important;
    }
    .fz15 {
      font-size: 15px !important;
    }

`;

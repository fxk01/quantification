import styled ,{injectGlobal} from 'styled-components';
import { Row, Col } from 'antd';
import larger from '@/statics/images/icon_rise_large.png';
import small from '@/statics/images/icon_rise_small.png';
import up from '@/statics/images/icon_arrow_up.png';
export const StyledRow = styled(Row)`
  flex: 1;
 
  
`;
export const StyledrightRow = styled(Col)`
  display: flex !important;
  flex-direction: column;
  padding-left: 8px !important;
  .ant-card-head {
    border: none;
    color: #fff;
    padding: 0 30px;
  }
  .ant-card {
    flex: 1;
    border: none;
    &:first-child {
      margin-bottom: 8px;
    }
  }
  .ant-card-body{
      color: #fff;
      padding:  0 30px
    }
    .card-right-bottom {
      background-color: transparent;
      .ant-card-body{
        padding: 0;
        height: 100%;
        
      }
    }
   .bar{
      flex: 0 0 280px !important
    }
   .amountRightBrow{
    height: 280px;
    .ant-col-8{
      height: 100%;
      div{
        height: 100%;
        overflow: hidden;
      }
    }
   }
   .rate{
    width: 157px;
  height: 172px;
  line-height: 160px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  display: block;
  background: url(${up}) no-repeat center;
  background-size: 100%;
  margin: 0 auto;
   }
.profit{
  background: -webkit-linear-gradient( #4bc6d1 , #74e4b3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  display: block;
  padding:80px 0;
  font-size: 32px;
  text-align: center;
  font-weight: bold

}
  @media (max-width: 768px) {
    height: 280px;
    flex-direction: row;
    margin-top: 8px;
    padding-left: 0;
    align-items:stretch;
    .ant-card {
        &:first-child {
          margin-bottom: 0;
          margin-right: 8px;
        }
      }
      .card-right-bottom.bar {
        flex: 1
      }
  }
`;


injectGlobal `
 .ant-card-head-title {
    h2 {
      margin-bottom: 0;
      font-size: 14px;
      font-weight: lighter;
      color: #fff;
    }
    p {
      margin-bottom: 0;
      font-size: 11px;
      font-weight: lighter;
    }
  }
.icon-rise-large {
    display: inline-block;
    width: 20.67px;
    height: 22.33px;
    background: url(${larger}) no-repeat no-repeat;
    background-size: contain;
  }
  .icon-rise-small {
    display: inline-block;
    width: 13px;
    height: 14px;
    background: url(${small}) no-repeat;
    background-size: contain;
  }
  .ml5 {
    margin-left: 5px !important;
  }
  .mr5 {
    margin-right: 5px !important;
  }
  .mt10 {
    margin-top: 10px !important;
  }
  .mt20 {
    margin-top: 20px !important;
  }
  .mb10 {
    margin-bottom: 10px !important;
  }
  .mb20 {
    margin-bottom: 20px !important;
  }
  .mb30 {
    margin-bottom: 30px !important;
  }
  .fz28 {
    font-size: 28px !important;
  }
  .fz24 {
    font-size: 24px !important;
  }
  .fz22 {
    font-size: 22px !important;
  }
  .fz18 {
    font-size: 18px !important;
  }
  .fz14 {
    font-size: 14px !important;
  }
  .fz12 {
    font-size: 12px !important;
  }
  .fz11 {
    font-size: 11px !important;
  }
  .vm {
    vertical-align: middle !important;
  }
  .text-left {
    text-align: left !important;
  }
  .text-right {
    text-align: right !important;
  }
  .text-center {
    text-align: center !important;
  }
  .color-gray {
    color: #999 !important;
  }
  .font-normal {
    font-weight: normal !important;
  }
  .font-300 {
    font-weight: 300 !important;
    font-family: 'Helvetica neue';
  }
  .font-lighter {
    font-weight: lighter !important;
  }
  .flex-end {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
`

import styled from 'styled-components';

import mainBg from '../statics/images/main_bg.jpg';

import iconSidenavProfit from '../statics/images/sidenav/icon_sidenav_profit.png';
import iconSidenavAssortment from '../statics/images/sidenav/icon_sidenav_assortment.png';
import iconSidenavAmount from '../statics/images/sidenav/icon_sidenav_amount.png';
import iconSidenavExports from '../statics/images/sidenav/icon_sidenav_exports.png';

import iconSidenavAchievement from '../statics/images/sidenav/icon_sidenav_achievement.png';
import iconSidenavOutstanding from '../statics/images/sidenav/icon_sidenav_outstanding.png';

import iconSidenavStockindex from '../statics/images/sidenav/icon_sidenav_stockindex.png';
import iconSidenavExchange from '../statics/images/sidenav/icon_sidenav_exchange.png';
import iconSidenavCalendar from '../statics/images/sidenav/icon_sidenav_calendar.png';

import iconSidenavNews from '../statics/images/sidenav/icon_sidenav_news.png';
import iconSidenavReport from '../statics/images/sidenav/icon_sidenav_report.png';

export const LoginWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: none fixed center #262626;
`;

export const BgWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: ${props => (props.theme === 'blue' ? `url(${mainBg}) no-repeat fixed #001529` : `none no-repeat fixed #262626`)};
  
  background-size: cover;

  .ant-breadcrumb > span:last-child {
    color: rgba(255, 255, 255, 1);
  }
  .ant-breadcrumb-separator {
    color: rgba(255, 255, 255, 1);
  }

  .ant-layout-sider {
    background-color: ${props =>
      props.theme === 'blue' ? '#0e1c2c' : '#1d1f25'};
  }
  .ant-menu {
    background-color: transparent;
  }
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: 0;
  }
  .ant-menu-vertical .ant-menu-item {
    margin-top: 0;
    margin-bottom: 0;
    height: 80px;
    font-size: 12px;
  }
  .ant-menu-vertical .ant-menu-item:not(:last-child) {
    margin-bottom: 0;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    /* background-color: ${props =>
      props.theme === 'blue' ? '#163a5e' : '#31343b'}; */
      background-color:transparent
  }
  .ant-menu-item:active, .ant-menu-submenu-title:active{
    background-color:transparent
  }
  .ant-menu-item > a {
    padding-top: 18px;
    color: #fff;
    text-align: center;
  }
  .ant-menu-item-selected > a,
  .ant-menu-item-selected > a:hover {
    color: #fff;
  }

  .sidenav-text {
    display: block;
    line-height: 24px;
  }

  .icon-sidenav-profit {
    display: block;
    margin: 0 auto;
    width: 27px;
    height: 23px;
    background: url(${iconSidenavProfit}) no-repeat;
    background-size: contain;
  }

  .icon-sidenav-assortment {
    display: block;
    margin: 0 auto;
    width: 29.67px;
    height: 28.33px;
    background: url(${iconSidenavAssortment}) no-repeat;
    background-size: contain;
  }

  .icon-sidenav-amount {
    display: block;
    margin: 0 auto;
    width: 27.67px;
    height: 23.33px;
    background: url(${iconSidenavAmount}) no-repeat;
    background-size: contain;
  }

  .icon-sidenav-exports {
    display: block;
    margin: 0 auto;
    width: 26px;
    height: 23.33px;
    background: url(${iconSidenavExports}) no-repeat;
    background-size: contain;
  }
  .icon-sidenav-achievement {
    display: block;
    margin: 0 auto;
    width: 26.67px;
    height: 22px;
    background: url(${iconSidenavAchievement}) no-repeat;
    background-size: contain;
  }
  .icon-sidenav-outstanding {
    display: block;
    margin: 0 auto;
    width: 23.33px;
    height: 22px;
    background: url(${iconSidenavOutstanding}) no-repeat;
    background-size: contain;
  }
  .icon-sidenav-stockindex {
    display: block;
    margin: 0 auto;
    width: 27px;
    height: 23px;
    background: url(${iconSidenavStockindex}) no-repeat;
    background-size: contain;
  }
  .icon-sidenav-exchange {
    display: block;
    margin: 0 auto;
    width: 27.67px;
    height: 23.67px;
    background: url(${iconSidenavExchange}) no-repeat;
    background-size: contain;
  }
  .icon-sidenav-calendar {
    display: block;
    margin: 0 auto;
    width: 26px;
    height: 26px;
    background: url(${iconSidenavCalendar}) no-repeat;
    background-size: contain;
  }
  .icon-sidenav-news {
    display: block;
    margin: 0 auto;
    width: 26px;
    height: 25.67px;
    background: url(${iconSidenavNews}) no-repeat;
    background-size: contain;
  }
  .icon-sidenav-report {
    display: block;
    margin: 0 auto;
    width: 26px;
    height: 26px;
    background: url(${iconSidenavReport}) no-repeat;
    background-size: contain;
  }

  .ant-card {
    background-color: ${props =>
      props.theme === 'blue'
        ? 'rgba(11, 20, 31, 0.9)'
        : 'rgba(49, 52, 59, 0.9)'};
  }

  .ant-col-lg-16 {
    display: flex;
    flex-direction: column;
  }

  .ant-col-lg-16 .ant-card {
    flex: 1;
    background-color: ${props =>
      props.theme === 'blue' ? 'rgba(22,58,94,.9)' : 'rgba(49, 52, 59, 0.9)'};
  }
  .whole.ant-row-flex {
    .download {
      width: 138px;
      height: 47px;
      background-color: #36d7c5;
      border-color: #36d7c5;

      &:hover,
      &:focus {
        background-color: #36d7c5;
        border-color: #36d7c5;
      }
    }
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
    .ant-card {
      border: none;
      background-color: transparent;
      color: #fff;
      min-height: 100%;

      .ant-card-head {
        border: none;

        .ant-card-head-title {
          color: #fff;
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
  }
  .outstanding {
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
  }
  .container.ant-layout {
    flex: 1;
    background-color: transparent;
    padding: 0 16px 33px 16px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

import styled, { injectGlobal } from 'styled-components';
export const Order = styled.table`
   width: 100%;
  color: #fff;
  text-align: center;
  font-size: 11px;
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC',Tahoma,Arial,sans-serif;
  font-weight: 300;
  .position {
      th {
        background-color: #ff9e0d;
        padding: 2px;
        border: 1px solid #0e1c2c;
        font-weight: 300;
      }
      
    }
    .history {
      th {
        background-color: #0e9afd;
        padding: 2px;
        border: 1px solid #0e1c2c;
        font-weight: 300;
      }
      
    }
    td {
      padding: 2px;
      font-weight: 300;
      border: 1px solid #0e1c2c;
    }
`;
export const DateBox = styled.div`
  .export-datepicker {
    input::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #fff;
    }

    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #fff;
    }

    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #fff;
    }

    input:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #fff;
    }
    margin-left: 30px;
    .ant-input {
      background-color: rgba(0, 0, 0, 0.3);
      border-color: transparent;
      color: #fff;
      font-size: 11px;
    }

    .ant-calendar-picker-icon,
    .ant-calendar-range-picker-separator {
      color: #fff;
    }
  }
`;

injectGlobal`

    .export-dropdown{
      input::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #fff;
    }

    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: #fff;
    }

    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: #fff;
    }

    input:-ms-input-placeholder {
      /* Internet Explorer 10+ */
      color: #fff;
    }
      .ant-calendar-input {
      background: transparent;
      color: #fff;
    }

    .ant-calendar-selected-day .ant-calendar-date {
      background: #179fed;
    }

    .ant-calendar-disabled-cell .ant-calendar-date {
      background: #163a5e;
    }
    .ant-calendar {
      font-size: 11px;
    }
    .ant-calendar,
    .ant-calendar-decade-panel,
    .ant-calendar-year-panel,
    .ant-calendar-month-panel,
    .ant-calendar-body {
      border: none;
      background-color: #0e243a;
      box-shadow: none;
      color: #fff;
    }

    .ant-calendar-body {
      padding-bottom: 12px;
    }

    .ant-calendar-input-wrap {
      border: none;
    }

    .ant-calendar-header {
      border: none;

      a {
        padding: 0 10px;
        color: #fff;
      }
      .ant-calendar-prev-month-btn {
        left: 36px;
      }
      .ant-calendar-next-month-btn {
        right: 36px;
      }
    }

    .ant-calendar-disabled-cell.ant-calendar-today .ant-calendar-date:before {
      border: none;
    }

    .ant-calendar-range .ant-calendar-input,
    .ant-calendar-range .ant-calendar-time-picker-input {
      background: transparent;
      color: #fff;
    }

    .ant-calendar-tbody .ant-calendar-date {
      color: #fff;
    }

    .ant-calendar table,
    .ant-calendar th,
    .ant-calendar td {
      text-align: center;
      padding: 0;
      margin: 0;
    }

    .ant-calendar-date {
      border: none;
      width: 100%;
      height: 100%;
      line-height: 35px;
    }

    .ant-calendar-range .ant-calendar-in-range-cell:before {
      background: #209fd2;
      top: 0;
      bottom: 0;
    }

    .ant-calendar-column-header .ant-calendar-column-header-inner {
      line-height: 35px;
    }

    .ant-calendar-time-picker {
      background: #0e243a;
    }

    .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-combobox {
      background: #0e243a;
    }

    .ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month,
    .ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month:hover {
      background: transparent;
    }

  }
`;

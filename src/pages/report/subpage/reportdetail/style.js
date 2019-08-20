import styled, { injectGlobal } from 'styled-components';



export const TopBar = styled.div`
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100vw;
    height: 54px;
    align-items:center;
    padding: 20px 15px 0;
    background-color: #2a292e;
    line-height: 34px;
    font-size: 14px;
    color: #fff;
    justify-content: space-between;

`;

export const PdfWrapper = styled.div`
    
    background-color: #808080;
    height: 100vh;
    overflow: hidden;
    padding: 66px 12px 12px;
    
`;




injectGlobal`
    .ant-list-loading .ant-spin-blur {
        opacity: 0;
    }
    .ant-list{
    height: 100%;
    overflow-x:hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    }
    .ant-list-vertical .ant-list-item-content{
    /* margin: 1px; */
    }
    .ant-list-vertical .ant-list-item{
    padding: 0;
    border: none;
    img{
        width: 100%;
    }
    }
`
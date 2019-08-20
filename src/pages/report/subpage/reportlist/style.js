import styled from 'styled-components';

export const FlexWrap = styled.div`
    flex: 1;
    height: calc(100vh - 173px);
    -webkit-overflow-scrolling:touch; 
    overflow: scroll;
    
`;

export const ReportListWrap = styled.div`
    height: 100%;
    background-color: ${props => props.theme==='blue' ? 'rgba(22,58,94,.9)' : 'rgba(49, 52, 59, 0.9)'};
    padding: 30px 50px 50px;
`;
import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
  font-size:10px;
  .recharts-responsive-container {
      width: calc(100% + 48px) !important;
      margin-left: ${props => props.left ? '24px' : '-24px'} ;
    }
`
export const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
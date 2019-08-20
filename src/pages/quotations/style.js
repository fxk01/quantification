import styled from 'styled-components';
import {Row} from 'antd';


export const FlexWrap = styled.div`
    flex: 1;
  height: calc(100vh - 173px);
  -webkit-overflow-scrolling:touch; 
  overflow: scroll;
`

export const FlexRow =  styled(Row)`
      flex: 1;
  height: calc(100vh - 173px);
  -webkit-overflow-scrolling:touch; 
  overflow: scroll;
`
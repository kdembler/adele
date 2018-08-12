import styled from 'styled-components';

import { statistics } from '../../style_tokens/tokens';

const StyledStatisticTile = styled.section`
  flex: 1;
  flex-grow: 0;

  cursor: pointer;
  margin: 13px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 15px;

  font-family: ${statistics.typography.fontFamily};
  font-size: ${statistics.typography.sizeTile};
  
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    transform: scale(1.1);
  }

  h3 {
    margin-top: 0px;
  }
`;

export { StyledStatisticTile as default };

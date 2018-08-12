import styled from 'styled-components';

import { statistics } from '../../style_tokens/tokens';

const StyledStatsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 50px auto;
  align-items: center;
  justify-content: space-around;
  width: 80%;
`;

const StyledStatsHeader = styled.h2`
  margin: 50px auto;
  text-align: center;
  font-family: ${statistics.typography.fontFamily};
  font-weight: ${statistics.typography.weightHeader};
  font-size: ${statistics.typography.sizeHeader};
`;

export { StyledStatsContainer, StyledStatsHeader };

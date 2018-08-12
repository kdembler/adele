import styled from 'styled-components';

import { statistics } from '../../style_tokens/tokens';

const StyledStatisticModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100000;
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: all 0.5s;
`;

const StyledStatisticModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 70px 15px 40px 15px;
  transform: translate(-50%, -50%) ${props => (!props.open ? 'scale(0.5)' : '')};
  background-color: white;
  border-radius: ${statistics.border.radiusModal};
  transition: all 0.5s;
`;

const StyledStatisticModalContentHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;

  border-bottom: 2px solid ${statistics.border.color};
  border-top-left-radius: ${statistics.border.radiusModal};
  border-top-right-radius: ${statistics.border.radiusModal};

  h3 {
    font-family: ${statistics.typography.fontFamily};
    font-weight: ${statistics.typography.weightModalHeader};
    font-size: ${statistics.typography.sizeModalHeader};
    margin: 15px 0px 15px 30px;
  }
`;

const StyledStatisticModalContentCloseButton = styled.a`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export {
  StyledStatisticModal,
  StyledStatisticModalContent,
  StyledStatisticModalContentHeader,
  StyledStatisticModalContentCloseButton,
};

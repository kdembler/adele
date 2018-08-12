import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledStatisticModal,
  StyledStatisticModalContent,
  StyledStatisticModalContentHeader,
  StyledStatisticModalContentCloseButton,
} from './statistic-modal.styles';
import Chart from '../chart/chart';
import Icon from '../icon/icon';
import close from '../../icons/close.svg';

const StatisticModal = ({ data, stat, onClick }) => {
  const closeSVG = close;

  const open = stat.field !== 'none';
  const options = {
    width: 700,
    height: 500,
    options: {
      maintainAspectRatio: false,
    },
  };

  if (stat.type === 'bar') {
    options.options.legend = { display: false };
  }
  return (
    <StyledStatisticModal
      open={open}
      onClick={(e) => {
        e.preventDefault();
        if (e.target === e.currentTarget) {
          // prevent clicks inside content area closing modal
          onClick();
        }
      }}
    >
      <StyledStatisticModalContent open={open}>
        <StyledStatisticModalContentHeader>
          <h3>{`${stat.label} Stats`}</h3>
          <StyledStatisticModalContentCloseButton onClick={onClick}>
            <Icon i={closeSVG} size="l" color="black" active />
          </StyledStatisticModalContentCloseButton>
        </StyledStatisticModalContentHeader>
        <Chart
          data={data}
          stat={stat}
          options={options}
        />
      </StyledStatisticModalContent>
    </StyledStatisticModal>
  );
};

/* eslint-disable react/forbid-prop-types */
/* disabling forbidden types, for more info see ../table/table.jsx
** same applies for chart options
*/
StatisticModal.propTypes = {
  data: PropTypes.array.isRequired,
  stat: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { StatisticModal as default };

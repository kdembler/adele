import React from 'react';
import PropTypes from 'prop-types';

import StyledStatisticTile from './statistic-tile.styles';
import Chart from '../chart/chart';

const tileChartOptions = {
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    hover: {
      mode: null,
    },
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }],
      ticks: {
        display: false,
      },
    },
  },
  width: 150,
  height: 150,
};

const StatisticTile = ({ data, stat, onClick }) => (
  <StyledStatisticTile onClick={onClick}>
    <h3>{stat.label}</h3>
    <Chart data={data} stat={stat} options={tileChartOptions} />
  </StyledStatisticTile>
);

/* eslint-disable react/forbid-prop-types */
/* disabling forbidden types, for more info see ../table/table.jsx
** same applies for chart options
*/
StatisticTile.propTypes = {
  data: PropTypes.array.isRequired,
  stat: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { StatisticTile as default };

import React from 'react';
import PropTypes from 'prop-types';
import { Bar, Doughnut } from 'react-chartjs-2';

import { statistics } from '../../style_tokens/tokens';
import { count, sort } from '../../logic/logic';

const Chart = ({ data, stat, options }) => {
  if (stat.field === 'none') {
    return <div />;
  }
  const counted = count(data, stat.field);
  const sorted = sort(counted);

  const opts = {
    data: {
      labels: sorted.map(e => e.key),
      datasets: [{
        label: stat.label,
        data: sorted.map(e => e.value),
        backgroundColor: statistics.chartColors,
      }],
    },
  };
  const chartOptions = Object.assign(options, opts);

  if (stat.type === 'bar') {
    return <Bar {...chartOptions} />;
  }
  return <Doughnut {...chartOptions} />;
};

/* eslint-disable react/forbid-prop-types */
/* disabling forbidden types, for more info see ../table/table.jsx
** same applies for chart options
*/
Chart.propTypes = {
  data: PropTypes.array.isRequired,
  stat: PropTypes.object.isRequired,
  options: PropTypes.object,
};

Chart.defaultProps = {
  options: {},
};

export { Chart as default };

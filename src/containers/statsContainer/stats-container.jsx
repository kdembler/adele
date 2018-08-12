import React, { Component } from 'react';

import { StyledStatsContainer, StyledStatsHeader } from './stats-container.styles';
import data from '../../data/data.JSON';
import statistics from '../../data/statistics.JSON';
import StatisticTile from '../../components/statisticTile/statistic-tile';
import StatisticModal from '../../components/statisticModal/statistic-modal';
import { capitalize } from '../../logic/logic';

const noneState = {
  stat: {
    field: 'none',
    type: 'none',
    label: 'none',
  },
};

class StatsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = noneState;
    this.stats = statistics.map(stat => ({
      field: stat.field,
      type: stat.type,
      label: capitalize(data[0][stat.field].label),
    }));
  }

  render() {
    const content = this.stats.map(stat => (
      <StatisticTile
        key={stat.field}
        data={data}
        stat={stat}
        onClick={() => this.setState({ stat })}
      />
    ));

    return (
      <div>
        <StyledStatsHeader id="stats">Statistics</StyledStatsHeader>
        <StyledStatsContainer>
          {content}
          <StatisticModal
            data={data}
            stat={this.state.stat}
            onClick={() => this.setState(noneState)}
          />
        </StyledStatsContainer>
      </div>
    );
  }
}
export { StatsContainer as default };

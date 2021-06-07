import PropTypes from 'prop-types';

const TournamentTable = ({ matches }) => (
  <table>
    <thead>
      <tr>
        <th>Match Date</th>
        <th>Teams</th>
        <th>Score</th>
        <th>Events</th>
      </tr>
    </thead>
    <tbody>
      {matches.map((data) => {
        const {
          mid, uts, teams, score, events,
        } = data;
        const date = new Date(uts * 1000);
        const dateString = `${date.getMonth() + 1} / ${date.getDate()} - ${date.getHours()}:${date.getMinutes()}`;
        return (
          <tr key={mid}>
            <td className="match-time">{dateString}</td>
            <td className="teams">
              {teams.home}
              {' '}
              -
              {' '}
              {teams.away}
            </td>
            <td>
              {score.home || 0}
              {' '}
              -
              {' '}
              {score.away || 0}
            </td>
            <td>
              <div>
                {events.map(({ eid, event }) => <p key={eid}>{event}</p>)}
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TournamentTable.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TournamentTable;

import PropTypes from 'prop-types';
import TournamentTable from './TournamentTable';
import Messi from '../Messi.jpeg';

const TournamentsContainer = ({ stats }) => (
  <div id="tournaments-container">
    <img className="tournaments-bg" src={Messi} alt="Lionel Messi" />
    {Object.keys(stats).map((tournamentID) => (
      <div key={tournamentID}>
        <h3>{stats[tournamentID].name}</h3>
        <TournamentTable key={tournamentID} matches={stats[tournamentID].matches} />
      </div>
    ))}
  </div>
);

TournamentsContainer.propTypes = {
  stats: PropTypes.shape({
    [PropTypes.number]: PropTypes.shape({
      name: PropTypes.string,
      matches: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default TournamentsContainer;

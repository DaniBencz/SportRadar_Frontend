import TournamentTable from './TournamentTable';
import Messi from '../Messi.jpeg';

const TournamentsContainer = ({ stats }) => {
  return (
    <div id="tournaments-container">
      <img className="tournaments-bg" src={Messi} alt="Lionel Messi" />
      {Object.keys(stats).map((tournamentName, index) => {
        return (
          <div key={index} >
            <h3 >{tournamentName}</h3>
            <TournamentTable key={index} tournamentData={stats[tournamentName]} />
          </div>
        );
      })}
    </div >
  );
};
export default TournamentsContainer;

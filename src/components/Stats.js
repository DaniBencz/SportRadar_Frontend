import Tournament from './Tournament';
import Messi from '../Messi.jpeg'

const Stats = ({ stats }) => {
  return (
    <div id="stats">
      <img class="stats-bg" src={Messi} style={{ width: "500px" }} />
      {Object.keys(stats).map((tournamentName, index) => {
        return (
          <div key={index} >
            <h3 style={{ margin: "3px" }}>{tournamentName}</h3>
            <Tournament key={index} tournamentData={stats[tournamentName]} />
          </div>
        );
      })}
    </div >
  );
};
export default Stats;

import Tournament from './Tournament';
import Messi from '../Messi.jpeg'

const Stats = ({ stats }) => {
  return (
    <div id="stats">
      <img className="stats-bg" src={Messi} style={{ width: "500px", zIndex: "-1" }} alt="Lionel Messi"/>
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

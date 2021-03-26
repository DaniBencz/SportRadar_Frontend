import Tournament from './Tournament';

const Stats = ({ stats }) => {
  return (
    <div id="stats">
      {Object.keys(stats).map((tournamentName, index) => {
        return (
          <div key= { index } >
            <h3>{tournamentName}</h3>
            <Tournament key={index} tournamentData={stats[tournamentName]} />
          </div>
  );
})}
    </div >
  );
};
export default Stats;

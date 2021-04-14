const TournamentTable = ({ tournamentData }) => {
  return (
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
        {tournamentData.map((data, index) => {
          const { uts, teams, score, events } = data;
          const date = new Date(uts * 1000);
          const dateString = `${date.getMonth() + 1} / ${date.getDate()} - ${date.getHours()}:${date.getMinutes()}`;
          return (
            <tr key={index}>
              <td className="match-time">{dateString}</td>
              <td className="teams">{teams.home} - {teams.away}</td>
              <td>{score.home || 0} - {score.away || 0}</td>
              <td><div>{events.map((event, i) => {
                return <p key={i}>{event}</p>;
              })}</div></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default TournamentTable;

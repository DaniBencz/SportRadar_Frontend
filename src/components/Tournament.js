const Tournament = ({ tournamentData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Teams</th>
          <th>Score</th>
          <th>Events</th>
        </tr>
      </thead>
      <tbody>
        {tournamentData.map((data, index) => {
          const { dateAndTime, teams, score, events } = data;
          return (
            <tr key={index}>
              <td>{dateAndTime}</td>
              <td>{teams.home} - {teams.away}</td>
              <td>{score.home || 0} - {score.away || 0}</td>
              <td>{events}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Tournament;

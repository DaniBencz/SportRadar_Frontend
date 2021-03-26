const Tournament = ({ tournamentData }) => {
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
          const { dateAndTime, teams, score, events } = data;
          return (
            <tr key={index}>
              <td style={{ width: "105px" }}>{dateAndTime}</td>
              <td style={{ width: "190px" }}>{teams.home} - {teams.away}</td>
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
export default Tournament;

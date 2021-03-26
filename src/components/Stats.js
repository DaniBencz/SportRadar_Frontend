
const Stats = ({ stats }) => {
    return (
        <div id="stats">
            {Object.keys(stats).map((tournament, index) => {
                return <div key={index}>{tournament}</div>;
            })}
        </div>
    );
};
export default Stats;

import ClockComponent from "./Clock";
import AddRoundForm from "./AddRoundForm";
function PersonCard({ person, people, onForceReload }) {
  if (!person) {
    return <h2>Please Select User</h2>;
  }
  if (!people) {
    return <h2>loading...</h2>;
  }
  const personObj = people.find((p) => p.id === person);
  return (
    <div>
      <ClockComponent />
      <h1>{personObj.name}</h1>
      <h2>
        {personObj.name}'s total is: {personObj.total}
      </h2>
      <h2>
        {personObj.name}'s balance is: {personObj.balance}
      </h2>
      <AddRoundForm
        id={personObj.id}
        onForceReload={onForceReload}
        people={people}
      />
    </div>
  );
}

export default PersonCard;

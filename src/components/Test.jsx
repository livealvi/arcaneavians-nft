import data from "../Data/data.json";

const Test = () => {
  console.log(data.arr);
  return (
    <div>
      <h4>Hello</h4>
      {data.phases.map((phase) => (
        <div key={phase.title}>{phase.title}</div>
      ))}
    </div>
  );
};

export default Test;

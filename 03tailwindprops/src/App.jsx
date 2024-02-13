import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl mb-4 rounded-xl p-4 font-bold underline bg-green-400">
        tailwind test
      </h1>
      <Card username="code" btnText="click me" />
      <Card username="chai" btnText="visit me" />
    </>
  );
}

export default App;

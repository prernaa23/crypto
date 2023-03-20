import "./App.css";
import { Fetch } from "./components/Fetch";
import Search from "./components/Search";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <Intro />
      <div className="App">
        <Search d={Fetch()} />
      </div>
    </>
  );
}

export default App;

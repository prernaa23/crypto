import "./App.css";
import { Fetch } from "./components/Fetch";
import Search from "./components/Search";

function App() {
  return (
    <>
      <div className="App">
        <Search d={Fetch()} />
      </div>
    </>
  );
}

export default App;

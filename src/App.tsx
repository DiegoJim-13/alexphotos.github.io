import "./App.css";
import UnderConstruction from "./components/UnderConstruction";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <h1 className="App-name">Alex's Photos!</h1>
      <UnderConstruction emoji="🏗️" />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;

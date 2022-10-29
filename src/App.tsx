import './App.css';
import UnderConstruction from './components/UnderConstruction';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <head>Page Name</head>
      <h1 className="App-name">Alex's Photos!</h1>
      <UnderConstruction emoji="🏗️"/>
      <Link to="/">Home</Link> | {" "}
      <Link to="/portfolio">Portfolio</Link> | {" "}
      <Link to="/portfolio/dogs">Dogs</Link>
      <Outlet/>
    </div>
  );
}

export default App;

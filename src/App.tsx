import React from 'react';
import logo from './logo.svg';
import './App.css';
import UnderConstruction from './components/UnderConstruction';

function App() {
  return (
    <div className="App">
      <head>Page Name</head>
      <h1 className="App-name">Alex's Photos!</h1>
      <UnderConstruction emoji="🏗️"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

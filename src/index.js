import React from 'react';
import ReactDOM from 'react-dom';
import CharacterVote from './components/CharacterVote';
import PlanetsList from './components/PlanetsList';
import './App.css';

const App = () => (
  <div className="container">
    <h1>Star Wars App</h1>
    <CharacterVote />
    <PlanetsList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

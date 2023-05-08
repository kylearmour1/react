import React, { useState } from 'react';

const PlanetsList = () => {
  const [planets, setPlanets] = useState([
    'Tatooine',
    'Dagobah',
    'Endor',
    'Hoth',
    'Alderaan',
  ]);

  return (
    <div>
      <h2>Star Wars Planets</h2>
      <ul>
        {planets.map((planet, index) => (
          <li key={index}>{planet}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetsList;

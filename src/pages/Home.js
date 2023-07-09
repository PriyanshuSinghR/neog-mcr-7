import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';
import { Card } from '../components/Card';

export const Home = () => {
  return (
    <div>
      <h2 style={{ color: 'white' }}>Top Continents for your next holiday</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {data.continents.map((continent) => (
          <div key={continent.id}>
            <Link to={`/${continent.name}`}>
              <Card {...continent} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

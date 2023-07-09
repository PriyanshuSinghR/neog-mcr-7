import React from 'react';
import { Link } from 'react-router-dom';
import { data } from '../data';
import { Card } from '../components/Card';

export const Home = () => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Welcome to Trip Advisor</h1>
      <h2 style={{ color: 'purple' }}>Top Continents for your next holiday</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {data.continents.map((continent) => (
          <div key={continent.id}>
            <Link to={`/${continent.id}`}>
              <Card {...continent} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../components/Card';

export const Country = () => {
  const { continentId } = useParams();
  const continent = data?.continents?.find(
    (continent) => continent.id == continentId,
  );
  return (
    <div>
      <h2 style={{ color: 'white' }}>
        Top Countries in {continent?.name} for your next holiday
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {continent?.countries?.map((country) => (
          <div key={country.id}>
            <Link to={`/${continentId}/${country.id}`}>
              <Card {...country} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

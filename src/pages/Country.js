import React from 'react';
import { data } from '../data';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../components/Card';

export const Country = () => {
  const { countryId } = useParams();
  const continent = data?.continents?.find((place) => place.id == countryId);
  console.log(continent);
  return (
    <div>
      <h2 style={{ color: 'white' }}>
        Top Countries in {continent?.name} for your next holiday
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {continent?.countries?.map((country) => (
          <div key={country.id}>
            <Link to={`/${country.id}`}>
              <Card {...country} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

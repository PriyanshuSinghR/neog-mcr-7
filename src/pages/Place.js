import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { data } from '../data';

export const Place = () => {
  const { continentId, countryId } = useParams();
  const country = data?.continents
    ?.find((continent) => continent.id == continentId)
    ?.countries?.find((country) => country.id == countryId);

  return (
    <div>
      <h2 style={{ color: 'white' }}>
        Top Countries in {country?.name} for your next holiday
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {country?.destinations?.map((place) => (
          <div key={place.id}>
            <Link to={`/${continentId}/${countryId}/${place.id}`}>
              <Card {...place} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

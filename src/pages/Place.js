import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { data } from '../data';

export const Place = () => {
  const { countryId, placeId } = useParams();
  const country = data?.continents
    ?.find((place) => place.id == countryId)
    .find((place) => place.id == placeId);

  return (
    <div>
      <h2 style={{ color: 'white' }}>
        Top Countries in {country?.name} for your next holiday
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {country?.map((country) => (
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

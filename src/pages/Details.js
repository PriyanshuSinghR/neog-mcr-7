import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from '../data';

export const Details = () => {
  const { continentId, countryId, placeId } = useParams();
  const {
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = data?.continents
    ?.find((continent) => continent.id == continentId)
    ?.countries?.find((country) => country.id == countryId)
    ?.destinations?.find((place) => place.id == placeId);
  return (
    <div style={{ color: 'white' }}>
      <h1>{name}</h1>
      <div
        style={{ display: 'flex', padding: '100px' }}
        className="flex-2 padding"
      >
        <img
          src={image}
          alt={name}
          style={{ width: '250px', height: '250px' }}
        />
        <div style={{ paddingLeft: '20px' }}>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontWeight: 'bold', color: 'purple' }}>
              Description:
            </span>{' '}
            {description}
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontWeight: 'bold', color: 'purple' }}>
              Ratings:
            </span>{' '}
            {ratings}
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontWeight: 'bold', color: 'purple' }}>
              Reviews:
            </span>{' '}
            {reviews}
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontWeight: 'bold', color: 'purple' }}>
              Location:
            </span>{' '}
            {location}
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontWeight: 'bold', color: 'purple' }}>
              Opening Hours:
            </span>{' '}
            {openingHours}
          </p>
          <p style={{ textAlign: 'left' }}>
            <span style={{ fontWeight: 'bold', color: 'purple' }}>
              Ticket Price:
            </span>{' '}
            {ticketPrice}
          </p>
          <p style={{ textAlign: 'left' }}>
            <Link
              href={website}
              target="_blank"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
                color: 'purple',
              }}
            >
              Website
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Map({ apartments }) {
  const { isLoaded } = useLoadScript(
    {
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries: ['places'],
    },
  );

  const center = useMemo(() => ({ lat: 34.069, lng: -118.445 }), []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      {
      apartments.length
      && apartments.map(
        (element) => <Marker key={uuidv4()} position={{ lat: element.lat, lng: element.lng }} />,
      )
      }
    </GoogleMap>
  );
}

Map.propTypes = {
  apartments: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })).isRequired,
};

export default Map;

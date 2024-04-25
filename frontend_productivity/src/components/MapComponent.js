// MapComponent.js
// Uses GoogleMaps api
import React from 'react';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import './Map.css';

const Map = ({ apiKey, latitude, longitude }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="gmp-map">
      <GoogleMap
        mapContainerStyle={{ width: '600px', height: '450px' }}
        mapElement={{ width: '600px', height: '450px' }}
        zoom={16}
        center={{ lat: latitude, lng: longitude }}
      >
        <MarkerF
          position={{ lat: latitude, lng: longitude }}
          title="We are here!"
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
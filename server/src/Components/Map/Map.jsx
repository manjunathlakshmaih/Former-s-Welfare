// MapComponent.js
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Initial map view (latitude, longitude, zoom level)
const center = [51.505, -0.09];

const MapComponent = () => {
  useEffect(() => {
    // Fix missing marker icon issue in React
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  const markers = [
    { position: [51.5, -0.09], popup: 'Marker 1' },
    { position: [51.51, -0.1], popup: 'Marker 2' },
    { position: [51.52, -0.12], popup: 'Marker 3' },
    { position: [51.53, -0.12], popup: 'Marker 4' },
    { position: [51.54, -0.12], popup: 'Marker 5' },
  ];
  
  return (
    <MapContainer center={center} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
  

export default MapComponent;

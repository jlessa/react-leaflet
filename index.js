import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import CustomWMSLayer from './CustomWMSLayer';

import './style.css';

function App() {
  return (
    <Map center={[-17.7757265, -50.0773024]} zoom={3}>
      <TileLayer
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <CustomWMSLayer
        layers={['pnboia:boia_cabo_frio']}
        options={{
          format: 'image/png',
          transparent: 'true',
          info_format: 'text/html',
        }}
        url="https://idem.dhn.mar.mil.br/geoserver/ows?SERVICE=WMS&"
      />
    </Map>
  );
}

render(<App />, document.getElementById('root'));

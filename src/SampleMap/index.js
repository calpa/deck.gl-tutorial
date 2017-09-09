import React from 'react';
import MapGL from 'react-map-gl';
import DeckGL, { LineLayer } from 'deck.gl';

import { data } from './data';

// Set your mapbox token here
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2FscGFsaXUiLCJhIjoiY2o3MWk4Yzh6MDE3ZjMzbnptNWo0OGlnaSJ9.hJcfS-eBH4p0BbAty5YjwQ';  // eslint-disable-line

const latitude = 22.337706;
const longitude = 114.262974;

const viewport = {
  latitude,
  longitude,
  zoom: 16.140440,
  bearing: 0,
  pitch: 0,
};
const width = 500;
const height = 500;

const SampleMap = () => (
  <MapGL
    {...viewport}
    width={width}
    height={height}
    mapboxApiAccessToken={MAPBOX_TOKEN}
  >
    <DeckGL
      {...viewport}
      width={width}
      height={height}
      debug
      layers={[
        new LineLayer({
          data,
        }),
      ]}
    />
  </MapGL>
);

export default SampleMap;

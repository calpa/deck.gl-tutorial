import React from 'react';
import MapGL from 'react-map-gl';
import DeckGL, { LineLayer } from 'deck.gl';

// Set your mapbox token here
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2FscGFsaXUiLCJhIjoiY2o3MWk4Yzh6MDE3ZjMzbnptNWo0OGlnaSJ9.hJcfS-eBH4p0BbAty5YjwQ';  // eslint-disable-line

const latitude = 22.336401;
const longitude = 114.263518;

const data = [
  {
    sourcePosition: [longitude, latitude],
    targetPosition: [longitude, latitude + 0.001],
  },
  {
    sourcePosition: [longitude + 0.001, latitude],
    targetPosition: [longitude, latitude + 0.001],
  },
];

const viewport = {
  latitude,
  longitude,
  zoom: 16.140440,
  bearing: 0,
  pitch: 60,
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

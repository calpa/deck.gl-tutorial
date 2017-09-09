import React from 'react';
import DeckGL, { LineLayer } from 'deck.gl';

import { data } from './data';

console.log(data);

const DeckGLOverlay = ({ viewport, width, height }) => (
  <DeckGL
    {...viewport}
    width={width}
    height={height}
    strokeWidth={3}
    layers={[
      new LineLayer({
        data,
      }),
    ]}
  />
);

export default DeckGLOverlay;

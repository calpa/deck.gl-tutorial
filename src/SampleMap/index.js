import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import DeckGLOverlay from './deckgl-overlay';

// Set your mapbox token here
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2FscGFsaXUiLCJhIjoiY2o3MWk4Yzh6MDE3ZjMzbnptNWo0OGlnaSJ9.hJcfS-eBH4p0BbAty5YjwQ';  // eslint-disable-line

const latitude = 22.337706;
const longitude = 114.262974;

const viewport = {
  latitude,
  longitude,
  zoom: 16.140440,
  // zoom: 10,
  bearing: 0,
  pitch: 0,
};


const handleClick = (event) => {
  console.log(event.lngLat);
};

class SampleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport,
      width: 500,
      height: 500,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  onViewportChange(newViewport) {
    this.setState({
      width: newViewport.width,
      height: newViewport.height,
    });
  }

  resize() {
    console.log(window.innerWidth, window.innerHeight);
    this.onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  render() {
    const { width, height } = this.state;

    return (
      <MapGL
        {...viewport}
        width={width}
        height={height}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onClick={handleClick}
      >
        <DeckGLOverlay viewport={viewport} width={width} height={height} />
      </MapGL>
    );
  }
}

export default SampleMap;

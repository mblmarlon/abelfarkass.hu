import * as React from 'react';
import SlickSlider from './../../partials/slick-slider/slick-slider.partial';

const data = require('../../data/pages/portraits.json');

export interface PortraitsProps {
}

export class Portraits extends React.Component<PortraitsProps, any> {
  public render() {
    return (
      <div>
        <h1>Portraits</h1>
        <SlickSlider images={data.images} />
      </div>
    );
  }
}

export default Portraits
import * as React from 'react';
import SlickSlider from './../../partials/slick-slider/slick-slider.partial';

const data = require('../../data/pages/portraits.json');

export interface PortraitsProps {
}

export class Portraits extends React.Component<PortraitsProps, any> {
  public render() {
    return (
      <div>
        <h1 className="mt-2">{data.title}</h1>
        <div className="mt-md-5">
          <SlickSlider images={data.images} />
        </div>
      </div>
    );
  }
}

export default Portraits
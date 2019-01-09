import * as React from 'react';
import SlickSlider from '../../partials/slick-slider/slick-slider.partial';

const data = require('../../data/pages/fashion.json');

export interface FashionProps {
}

export class Fashion extends React.Component<FashionProps, any> {
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

export default Fashion
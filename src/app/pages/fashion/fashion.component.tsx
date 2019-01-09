import * as React from 'react';
import SlickSlider from '../../partials/slick-slider/slick-slider.partial';

const data = require('../../data/pages/fashion.json');

export interface FashionProps {
}

export class Fashion extends React.Component<FashionProps, any> {
  public render() {
    return (
      <div>
        <h1>Fashion</h1>
        <SlickSlider images={data.images} />
      </div>
    );
  }
}

export default Fashion
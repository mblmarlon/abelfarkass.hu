import * as React from 'react';
import SlickSlider from './../../partials/slick-slider/slick-slider.partial';

const data = require('../../data/pages/portraits.json');

export interface PortraitsProps {
}

export class Portraits extends React.Component<PortraitsProps, any> {
  public render() {
    return (
      <div className="pages-portraits h-100">
        <h1 className="page-title">{data.title}</h1>
        <div className="pages-content h-100 d-flex align-items-center">
          <div className="content-wrapper">
            <SlickSlider images={data.images} />
          </div>
        </div>
      </div>
    );
  }
}

export default Portraits
import * as React from 'react';
import SlickSlider from './../../partials/slick-slider/slick-slider.partial';

const data = require('../../data/pages/portraits.json');

export interface PortraitsProps {
}

export interface PortraitsState {
  images: any;
} 

export class Portraits extends React.Component<PortraitsProps, any> {
  constructor(props: PortraitsProps) {
    super(props);
    this.state = {
      images: data.images
    }
  }

  public render() {
    const { images } = this.state;
    return (
      <div className="page page-portraits">
        <div className="page-content">
          <div className="container-w-100">
            <div className="row">
              <div className="col-12">
                {images && images.length > 0 && (
                  <SlickSlider images={images} autoplay={false} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portraits
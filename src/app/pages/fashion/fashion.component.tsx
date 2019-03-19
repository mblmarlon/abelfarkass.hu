import * as React from 'react';
import SlickSlider from '../../partials/slick-slider/slick-slider.partial';

const data = require('../../data/pages/fashion.json');

export interface FashionProps {

}

export interface FashionState {
  images: any;
}

export class Fashion extends React.Component<FashionProps, any> {
  constructor(props: FashionProps) {
    super(props);
    this.state = {
      images: data.images,
    }
  }

  public render() {
    const { images } =this.state;
    return (
      <div className="page page-fashion">
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

export default Fashion
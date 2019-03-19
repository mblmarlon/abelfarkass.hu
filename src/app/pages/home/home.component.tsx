import * as React from 'react';
import SlickSlider from '../../partials/slick-slider/slick-slider.partial';

const homeData = require('../../data/pages/home.json');

export interface HomeProps {
}

export interface HomeState {
  images: any,
}

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      images: homeData.images
    }
  }
  
  public render() {
    const { images } = this.state;
    return (
      <div className="page page-home">
        <div className="page-content">
          <div className="container-w-100">
            <div className="row">
              <div className="col-12">
                {images && images.length > 0 && (
                  <SlickSlider images={images} autoplay={true} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
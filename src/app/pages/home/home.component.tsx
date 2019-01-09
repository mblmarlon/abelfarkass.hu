import * as React from 'react';
import SlickSlider from '../../partials/slick-slider/slick-slider.partial';

const homeData = require('../../data/pages/home.json');

export interface HomeProps {
}

export class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <div>
        <div className="mt-md-5">
          <SlickSlider images={homeData.images} />
        </div>
      </div>
    );
  }
}

export default Home
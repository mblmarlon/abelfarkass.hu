import * as React from 'react';
import SlickSlider from '../../partials/slick-slider/slick-slider.partial';

const homeData = require('../../data/pages/home.json');

export interface HomeProps {
}

export class Home extends React.Component<HomeProps> {

  componentDidMount() {
    console.log('did mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  public render() {
    return (
      <div className="pages-home h-100">
        <div className="content-wrapper">
          <div>
            <SlickSlider images={homeData.images} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home
import * as React from 'react';
import SlickSlider from './../../partials/slick-slider/slick-slider.partial';

export interface StillProps {
}

export class Still extends React.Component<StillProps, any> {
  public render() {
    return (
      <div>
        <h1>Still</h1>
        <SlickSlider/>
      </div>
    );
  }
}

export default Still
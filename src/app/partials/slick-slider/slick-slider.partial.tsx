import * as React from 'react';
import Slider from 'react-slick';

import './slick-slider.partial.scss'


export interface SlickSliderProps {
  images: any;
}

export class SlickSlider extends React.Component<SlickSliderProps> {
  constructor(props: SlickSliderProps) {
    super (props);
  }

  render() {
    const settings = {
      accessibility: true,
      adaptiveHeight: true,
      arrows: true,
      centerMode: true,
      centerPadding: "0px",
      dots: true,
      draggable: true,
      fade: false,
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      swipeToSlide: true,
      swipe: true,
      touchMove: true,
    };
    return (
      <div className="partial-slider">
        {console.log(this.props.images)}
        <Slider {...settings}>
          {this.props.images && this.props.images.map((img: any) =>
            <img src={`${process.env.PUBLIC_URL + '/img/' + img.src}`} className="img-fit"/>
          )}
        </Slider>
      </div>
    );
  }
}

export default SlickSlider
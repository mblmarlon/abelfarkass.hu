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
      adaptiveHeight: false,
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
      responsive: [ 
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
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
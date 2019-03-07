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
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 500,
      responsive: [{
        breakpoint: 480,
        settings: {
          autoplay: true,
          speed: 3500,
          autoplaySpeed: 1500,
          dots: false,
          arrows: false,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return (
      <div className="partial-slider">
        {this.props.images && this.props.images.length > 0 && (
          <Slider {...settings}>
            {this.props.images && this.props.images.map((img: any) =>
              <div className="imge-fit">
                <img src={`${process.env.PUBLIC_URL + '/img/' + img.src}`}/>
              </div>
            )}
          </Slider>
        )}
      </div>
    );
  }
}

export default SlickSlider
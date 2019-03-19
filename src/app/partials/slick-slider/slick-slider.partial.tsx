import * as React from 'react';
import Slider from 'react-slick';

import './slick-slider.partial.scss'

export interface SlickSliderProps {
  images: any;
  autoplay?: boolean;
}

export interface SlickSliderState {
}

export class SlickSlider extends React.Component<SlickSliderProps> {
  constructor(props: SlickSliderProps) {
    super (props);
  }

  componentDidMount() {
    const slider = document.getElementById('slider');
    if (slider) {
      slider.focus();
    }
  }
  render() {
    const settings = {
      dots: true,
      centerMode: true,
      variableWidth: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: this.props.autoplay ? this.props.autoplay : false,
      swipeToSlide: true,
      speed: this.props.autoplay ? 3000 : 1500,
      autoplaySpeed: 1500,
      responsive: [{
        breakpoint: 480,
        settings: {
          autoplay: this.props.autoplay ? this.props.autoplay : false,
          speed: 2000,
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
            {this.props.images && this.props.images.map((img: any, index: number) =>
              <div id="slider" className="imge-fit"  key={`img-${index}`} >
                <img src={`${process.env.PUBLIC_URL + '/img/' + img.src}`} />
              </div>
            )}
          </Slider>
        )}
      </div>
    );
  }
}

export default SlickSlider
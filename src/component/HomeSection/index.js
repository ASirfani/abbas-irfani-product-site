import React from 'react';
import './index.css';
import TemplateContainer from '../../container/TemplateContainer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import productsData from '../../data.json';

const HomeSection = ({ title, speed, slidesToScroll, autoplaySpeed, autoplay, link }) => {
  const sliderSettings = {
    infinite: true,
    speed: speed ? speed : 1000,
    autoplay: autoplay ? autoplay : true,
    autoplaySpeed: autoplaySpeed ? autoplaySpeed : 3000,
    slidesToScroll: slidesToScroll ? slidesToScroll : 0.25,
    swipeToSlide: false,
    slidesToShow: 1,
    focusOnSelect: true,
  };
  const displayedProducts = productsData.slice(0, 4);

  return (
    <div className="newproducts">
      <div className='section-title'>

        <h3><NavLink className={'h3'}
          to={link}>
          {title ? title : "Section"}
        </NavLink>
        </h3>
      </div>
      <div className='container '>
        <Slider {...sliderSettings}>
          <div >
            <div className='sliders'>
              {displayedProducts.map((product, index) => (
                <TemplateContainer
                  key={index}
                  name={product.name}
                  price={product.price}


                />
              ))}
            </div>

          </div>
          <div >
            <div className='sliders'>
              {displayedProducts.map((product, index) => (
                <TemplateContainer
                  key={index}
                  name={product.name}
                  price={product.price}


                />
              ))}
            </div>

          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeSection;

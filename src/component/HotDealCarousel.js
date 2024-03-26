import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HotDeal from './HotDeal.js'; // 경로가 정확한지 확인하세요.

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

function HotDealCarousel() {
  return (
    <Carousel
      draggable={true}
      responsive={responsive}
      infinite={false}
      ssr={true} // 서버 사이드 렌더링을 위해 필요한 경우만 사용하세요.
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      arrows={false}
    >
      <HotDeal />
      <HotDeal />
      <HotDeal />
      <HotDeal />
      <HotDeal />
      <HotDeal />
      <HotDeal />
      <HotDeal />
      <HotDeal />
      <HotDeal />
    </Carousel>
  );
}

export default HotDealCarousel;

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotDeal from "./HotDeal.js"; // 경로가 정확한지 확인하세요.

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3,
    },
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
            <HotDeal
                dealTitle="핫딜 1"
                originalPrice="26,300원"
                discountRate="55"
                discountedPrice="11,830원"
                imageUrl="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
            />

            <HotDeal
                dealTitle="핫딜 1"
                originalPrice="26,300원"
                discountRate="55"
                discountedPrice="11,830원"
                imageUrl="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
            />

            <HotDeal
                dealTitle="핫딜 1"
                originalPrice="26,300원"
                discountRate="55"
                discountedPrice="11,830원"
                imageUrl="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
            />

            <HotDeal
                dealTitle="핫딜 1"
                originalPrice="26,300원"
                discountRate="55"
                discountedPrice="11,830원"
                imageUrl="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
            />

            <HotDeal
                dealTitle="핫딜 1"
                originalPrice="26,300원"
                discountRate="55"
                discountedPrice="11,830원"
                imageUrl="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
            />

            <HotDeal
                dealTitle="핫딜 1"
                originalPrice="26,300원"
                discountRate="55"
                discountedPrice="11,830원"
                imageUrl="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
            />
        </Carousel>
    );
}

export default HotDealCarousel;

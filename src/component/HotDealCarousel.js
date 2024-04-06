import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HotDeal from "./HotDeal.js";
import "../App.css";

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
    const DEALS_URL = process.env.REACT_APP_HOTDEAL; // API 엔드포인트 환경변수 사용 예시

    const [deals, setDeals] = useState([]);

    useEffect(() => {
        fetch(DEALS_URL)
            .then((response) => response.json())
            .then((data) => {
                // data.products가 배열인지 확인하고, 맞다면 해당 데이터의 처음 6개 항목만 사용
                if (Array.isArray(data.products)) {
                    setDeals(data.products.slice(0, 6));
                } else {
                    console.error("Fetched data is not an array:", data);
                    setDeals([]); // data.products가 배열이 아닌 경우 빈 배열 설정
                }
            })
            .catch((error) => console.error("Error fetching deals:", error));
    }, [DEALS_URL]);

    // DEPENDENCY 배열에 DEALS_URL을 추가하여 URL이 변경될 때마다 새로운 데이터를 불러옵니다.

    return (
        <Carousel
            draggable={true}
            responsive={responsive}
            infinite={false}
            ssr={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={false}
        >
            {deals.map((deal, index) => (
                <HotDeal
                    key={index}
                    dealTitle={
                        deal.name.length > 8
                            ? `${deal.name.substring(0, 8)}...`
                            : deal.name
                    }
                    originalPrice={new Intl.NumberFormat().format(
                        deal.highest_regular_price
                    )}
                    discountRate={Math.floor(deal.discount_rate)}
                    discountedPrice={new Intl.NumberFormat().format(deal.price)}
                    imageUrl={deal.thumbnail}
                    componentIndex={index + 1}
                />
            ))}
        </Carousel>
    );
}

export default HotDealCarousel;

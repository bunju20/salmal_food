import React, { useEffect, useState } from "react";
import TopTwoBox from "../component/TopTwoBox"; // 경로 확인 필요
import "../App.css"; // 경로 확인 필요

function TopTwoService() {
    const [products, setProducts] = useState([]);
    const API_URL = process.env.REACT_APP_HOSITAMTAM;
    const numberOfProducts = 2; // 원하는 제품 개수

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                // 필요한 정보만 추출하여 상태에 저장
                const selectedProducts = data.products.slice(
                    0,
                    numberOfProducts
                );
                setProducts(selectedProducts);
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, [API_URL, numberOfProducts]);

    return (
        <div className="top-two-products-container">
            {products.map((product, index) => (
                <TopTwoBox
                    key={index}
                    index={index}
                    productName={product.name}
                    originalPrice={product.price.toString()}
                    discountRate={product.discount_rate.toString()} // 수정됨
                    discountedPrice={product.discount_price.toString()}
                    imageUrl={product.thumbnail} // 수정됨
                    savings={(
                        parseInt(product.price) -
                        parseInt(product.discount_price)
                    ).toString()}
                />
            ))}
        </div>
    );
}

export default TopTwoService;

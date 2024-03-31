import React, { useEffect, useState } from "react";
import TopTwoBox from "../component/TopTwoBox"; // 경로 확인 필요
import "../App.css"; // 경로 확인 필요

function TopTwoService() {
    const [products, setProducts] = useState([]);
    const API_URL = process.env.REACT_APP_TOPTWO;
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
                    originalPrice={new Intl.NumberFormat().format(
                        product.highest_regular_price
                    )}
                    discountRate={Math.floor(product.discount_rate).toString()} // 수정됨
                    discountedPrice={new Intl.NumberFormat().format(
                        product.price
                    )}
                    imageUrl={product.thumbnail} // 수정됨
                    savings={new Intl.NumberFormat().format(
                        product.discount_price
                    )}
                />
            ))}
        </div>
    );
}

export default TopTwoService;

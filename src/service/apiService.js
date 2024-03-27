import React, { useEffect } from "react";

function Products({ API_URL, numberOfProducts }) {
    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                // 받아온 데이터에서 numberOfProducts 만큼의 제품 정보만 추출
                const extractedData = data.products
                    .slice(0, numberOfProducts)
                    .map((product) => ({
                        name: product.name,
                        price: product.price,
                        discountPrice: product.discount_price,
                        discountRate: product.discount_rate,
                    }));
                console.log(
                    "Extracted product info:",
                    JSON.stringify(extractedData, null, 2)
                ); // JSON 형태로 콘솔에 출력
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [API_URL, numberOfProducts]); // API_URL과 numberOfProducts 변화 시 재실행

    return (
        <div>
            <h2>Requested number of product info is printed in the console.</h2>
        </div>
    );
}

export default Products;

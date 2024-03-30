import React, { useEffect, useState } from "react";
import Tag from "../component/Tag"; // Tag 컴포넌트 경로 확인 필요
import CateBox from "../component/CateBox"; // CateBox 컴포넌트 경로 확인 필요
import "../App.css";

function CateService() {
    const FRESH_URL = process.env.REACT_APP_FRESH;
    const EASY_URL = process.env.REACT_APP_EASY;
    const ONE_URL = process.env.REACT_APP_ONE;

    const [productsData, setProductsData] = useState({
        "당일배송 신선식품": [],
        "매일 건강 한 조각": [],
        "간편조리 즉석식품": [],
    });
    const [selectedTag, setSelectedTag] = useState("당일배송 신선식품");

    const API_URLS = {
        "당일배송 신선식품": FRESH_URL,
        "매일 건강 한 조각": ONE_URL,
        "간편조리 즉석식품": EASY_URL,
    };

    useEffect(() => {
        Object.keys(API_URLS).forEach((tag) => {
            fetch(API_URLS[tag])
                .then((response) => response.json())
                .then((data) => {
                    setProductsData((prevData) => ({
                        ...prevData,
                        [tag]: data.products.slice(0, 6),
                    }));
                })
                .catch((error) =>
                    console.error(`Error fetching products for ${tag}:`, error)
                );
        });
    }, []);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    return (
        <section className="gray-section">
            <div className="tags-container">
                {Object.keys(API_URLS).map((tag) => (
                    <Tag
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        isActive={selectedTag === tag}
                    >
                        {tag}
                    </Tag>
                ))}
            </div>
            <div className="product-grid">
                {productsData[selectedTag].map((product, index) => (
                    <CateBox
                        key={index}
                        productName={product.name}
                        originalPrice={product.highest_regular_price.toString()}
                        discountRate={product.discount_rate.toString()}
                        price={product.price.toString()}
                        imageUrl={product.thumbnail}
                        categoryName={selectedTag}
                        componentIndex={index + 1}
                    />
                    /*
                                        key={index}
                    index={index}
                    productName={product.name}
                    originalPrice={product.highest_regular_price.toString()}
                    discountRate={product.discount_rate.toString()} // 수정됨
                    discountedPrice={product.price.toString()}
                    imageUrl={product.thumbnail} // 수정됨
                    savings={product.discount_price.toString()}
                />
                    */
                ))}
            </div>
        </section>
    );
}

export default CateService;

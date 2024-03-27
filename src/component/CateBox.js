import React from "react";
import "../css/cateBox.css"; // Make sure to import the CSS file here

function CateBox({
    price,
    discountRate,
    productName,
    originalPrice,
    imageUrl,
}) {
    return (
        <div className="Div">
            <div className="Div2">
                <img className="Img" loading="lazy" srcSet={imageUrl} alt="" />
                <div className="Div3">로켓프레시</div>
            </div>
            <div className="Div4">
                <span
                    style={{
                        fontFamily: "AppleSDGothicNeoEB",
                        fontSize: "16px",
                    }}
                >
                    {price}
                </span>
                <span style={{ fontSize: "14px" }}>원</span>
            </div>
            <div className="Div5">
                <div className="Div6">{originalPrice}원</div>
                <div className="Div7">{discountRate}%</div>
            </div>
            <div className="Div8">{productName}</div>
        </div>
    );
}

export default CateBox;

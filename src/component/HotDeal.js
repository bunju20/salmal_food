import React from "react";
import "../css/HotDeal.css"; // Import the CSS file here

function HotDeal({
    dealTitle,
    originalPrice,
    discountRate,
    discountedPrice,
    imageUrl,
    componentIndex,
}) {
    const handleClick = () => {
        //console.log("버튼이 클릭되었습니다.");
        console.log(
            `버튼이 클릭되었습니다. 컴포넌트 식별자: ${componentIndex}`
        );
    };
    return (
        <button onClick={handleClick} className="Div-h">
            <div className="Div2-h">
                <img className="Img-h" loading="lazy" src={imageUrl} alt="" />
            </div>
            <div className="Div3-h">{dealTitle}</div>
            <div className="Div4-h">
                <div className="Div5-h">{originalPrice}</div>
                <div className="Div6-h">{discountRate}%</div>
            </div>
            <div className="Div7-h">
                <div className="Div8-h">
                    <div className="Div9-h">{discountedPrice}</div>
                    <div className="Div10-h" />
                </div>
                {/* 이미지 경로가 고정되어 있으므로, 필요에 따라 props에서 받아오는 방식으로 변경할 수 있습니다. */}
                <img src={require("../asset/rocket.svg").default} />
            </div>
        </button>
    );
}

export default HotDeal;

import React from "react";
import "../css/HotDeal.css"; // Import the CSS file here
import { useDispatch, useSelector } from "react-redux";
import links from "../service/CoupangURL.json";
import {
    setHotDeal1,
    setHotDeal2,
    setHotDeal3,
    setHotDeal4,
    setHotDeal5,
    setHotDeal6,
} from "../google/dataSlice";
import { sendDataToSpreadsheet } from "../google/sendData.jsx";

function HotDeal({
    dealTitle,
    originalPrice,
    discountRate,
    discountedPrice,
    imageUrl,
    componentIndex,
}) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const handleClick = async () => {
        //console.log("버튼이 클릭되었습니다.");
        console.log(
            `버튼이 클릭되었습니다. 컴포넌트 식별자: ${componentIndex}`
        );
        if (componentIndex === 1) {
            dispatch(setHotDeal1("TRUE"));
            await sendDataToSpreadsheet(data);
            window.location.href = links.hotDeal1;
        } else if (componentIndex === 2) {
            dispatch(setHotDeal2("TRUE"));
            await sendDataToSpreadsheet(data);
            window.location.href = links.hotDeal2;
        } else if (componentIndex === 3) {
            dispatch(setHotDeal3("TRUE"));
            await sendDataToSpreadsheet(data);
            window.location.href = links.hotDeal3;
        } else if (componentIndex === 4) {
            dispatch(setHotDeal4("TRUE"));
            await sendDataToSpreadsheet(data);
            window.location.href = links.hotDeal4;
        } else if (componentIndex === 5) {
            dispatch(setHotDeal5("TRUE"));
            await sendDataToSpreadsheet(data);
            window.location.href = links.hotDeal5;
        } else if (componentIndex === 6) {
            dispatch(setHotDeal6("TRUE"));
            await sendDataToSpreadsheet(data);
            window.location.href = links.hotDeal6;
        }
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
                    <div className="Div9-h">{`${discountedPrice}원`}</div>
                </div>
                {/* 이미지 경로가 고정되어 있으므로, 필요에 따라 props에서 받아오는 방식으로 변경할 수 있습니다. */}
                <div>
                    <img
                        src={require("../asset/rocket.svg").default}
                        width="58px"
                        height="28px"
                        style={{ marginTop: "3px" }}
                    />
                </div>
            </div>
        </button>
    );
}

export default HotDeal;

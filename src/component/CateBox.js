import React from "react";
import "../css/cateBox.css"; // Make sure to import the CSS file here
import { useDispatch, useSelector } from "react-redux";
import {
    setFeature1,
    setFeature1_1,
    setFeature1_2,
    setFeature1_3,
    setFeature1_4,
    setFeature1_5,
    setFeature1_6,
    setFeature2,
    setFeature2_1,
    setFeature2_2,
    setFeature2_3,
    setFeature2_4,
    setFeature2_5,
    setFeature2_6,
    setFeature3,
    setFeature3_1,
    setFeature3_2,
    setFeature3_3,
    setFeature3_4,
    setFeature3_5,
    setFeature3_6,
} from "../google/dataSlice";

import { sendDataToSpreadsheet } from "../google/sendData.jsx";

function CateBox({
    price,
    discountRate,
    productName,
    originalPrice,
    imageUrl,
    categoryName,
    componentIndex,
}) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);
    const handleClick = () => {
        //console.log("버튼이 클릭되었습니다.");
        let category = 0;
        if (categoryName == "당일배송 신선식품") {
            category = 1;
        } else if (categoryName == "매일 건강 한 조각") {
            category = 2;
        } else if (categoryName == "간편조리 즉석식품") {
            category = 3;
        }

        if (category == 1) {
            dispatch(setFeature1("TRUE"));
            switch (componentIndex) {
                case 1:
                    dispatch(setFeature1_1("TRUE"));
                    break;
                case 2:
                    dispatch(setFeature1_2("TRUE"));
                    break;
                case 3:
                    dispatch(setFeature1_3("TRUE"));
                    break;
                case 4:
                    dispatch(setFeature1_4("TRUE"));
                    break;
                case 5:
                    dispatch(setFeature1_5("TRUE"));
                    break;
                case 6:
                    dispatch(setFeature1_6("TRUE"));
                    break;
            }
        } else if (category == 2) {
            dispatch(setFeature2("TRUE"));
            switch (componentIndex) {
                case 1:
                    dispatch(setFeature2_1("TRUE"));
                    break;
                case 2:
                    dispatch(setFeature2_2("TRUE"));
                    break;
                case 3:
                    dispatch(setFeature2_3("TRUE"));
                    break;
                case 4:
                    dispatch(setFeature2_4("TRUE"));
                    break;
                case 5:
                    dispatch(setFeature2_5("TRUE"));
                    break;
                case 6:
                    dispatch(setFeature2_6("TRUE"));
                    break;
            }
        } else if (category == 3) {
            dispatch(setFeature3("TRUE"));
            switch (componentIndex) {
                case 1:
                    dispatch(setFeature3_1("TRUE"));
                    break;
                case 2:
                    dispatch(setFeature3_2("TRUE"));
                    break;
                case 3:
                    dispatch(setFeature3_3("TRUE"));
                    break;
                case 4:
                    dispatch(setFeature3_4("TRUE"));
                    break;
                case 5:
                    dispatch(setFeature3_5("TRUE"));
                    break;
                case 6:
                    dispatch(setFeature3_6("TRUE"));
                    break;
            }
        }
    };

    return (
        <button onClick={handleClick} className="Div">
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
        </button>
    );
}

export default CateBox;

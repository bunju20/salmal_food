import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecent1, setRecent2 } from "../google/dataSlice";
import { sendDataToSpreadsheet } from "../google/sendData.jsx";
import links from "../service/CoupangURL.json";

function TopTwoBox({
    index, // 추가된 prop: 컴포넌트의 인덱스 또는 고유 식별자
    productName,
    originalPrice,
    discountRate,
    discountedPrice,
    imageUrl,
    savings,
}) {
    // 클릭 이벤트 핸들러가 컴포넌트의 식별 정보를 로깅하도록 수정
    const dispatch = useDispatch();
    const data = useSelector((state) => state.data);

    const handleClick = async () => {
        if (index == 0) {
            dispatch(setRecentAsync("TRUE", "recent1"));
            window.location.href = links.TopTwo1;
        } else {
            dispatch(setRecentAsync("TRUE", "recent2"));
            window.location.href = links.TopTwo2;
        }
        // 여기에 원하는 동작 추가
    };

    // 비동기 액션 크리에이터
    const setRecentAsync = (value, recentType) => (dispatch) => {
        if (recentType === "recent1") {
            dispatch(setRecent1(value));
        } else if (recentType === "recent2") {
            dispatch(setRecent2(value));
        }
    };

    return (
        <button
            onClick={handleClick}
            style={{ padding: "10px" }}
            className="flex flex-col items-center bg-white rounded-xl border border-solid border-zinc-300 leading-[150%] max-w-[172px]"
        >
            <div className="text-sm leading-4 text-neutral-700 text-left w-full">
                {productName}
            </div>
            <div className="flex gap-1 items-center mt-1.5 text-xs w-full justify-start">
                <div className="self-stretch my-auto text-zinc-400">
                    {originalPrice} 원
                </div>
                <div className="self-stretch my-auto text-pink-400">
                    {discountRate}%
                </div>
                {/* 이미지 경로는 props로 받은 것이 아니므로 변경하지 않았습니다. 필요에 따라 조정하세요. */}
                <img
                    src={require("../asset/rocket.svg").default}
                    width="42"
                    height="16"
                />
            </div>
            <div
                className="text-xl w-full"
                style={{ color: "#FF77CA", textAlign: "left" }}
            >
                <span>{discountedPrice} 원</span>
            </div>
            <div className="flex justify-end w-full">
                <img
                    loading="lazy"
                    srcSet={imageUrl}
                    style={{ width: "107px", height: "76px" }}
                    className="rounded-[6px]"
                />
            </div>

            <div
                style={{
                    fontSize: "11px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "28px",
                }} // 여기서 height는 예시입니다. 실제 필요한 높이에 맞게 조정하세요.
                className="mt-2 text-center text-pink-400 rounded-md bg-pink-400 bg-opacity-20 w-full"
            >
                지금 사고 {savings}원 아끼기
            </div>
        </button>
    );
}

export default TopTwoBox;

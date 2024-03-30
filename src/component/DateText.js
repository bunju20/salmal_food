import React from "react";

function DateText() {
    // 현재 날짜에서 하루를 뺀 날짜 생성
    const yesterday = new Date(Date.now() - 86400000); // 86400000ms = 24시간

    // 'x월 x일 x시 x분 기준' 형식으로 날짜 포맷
    const formattedDate = `${
        yesterday.getMonth() + 1
    }월 ${yesterday.getDate()}일 21:59 기준`;

    return (
        <div
            style={{
                textAlign: "left",
                color: "#B5B5B5",
                fontSize: "10px",
                marginLeft: "15px",
            }}
        >
            {formattedDate}
        </div>
    );
}

export default DateText;

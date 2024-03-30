import React, { useEffect, useState } from "react";
import "../App.css";

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0); // 다음 날 자정 설정

            const difference = tomorrow - now; // 남은 밀리초 계산

            // 남은 시간을 HH:mm:ss 포맷으로 변환
            let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            let minutes = Math.floor((difference / 1000 / 60) % 60);
            let seconds = Math.floor((difference / 1000) % 60);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            setTimeLeft(`${hours} : ${minutes} : ${seconds}`);

            // 자정이 지나면 다시 카운트다운 시작
            if (difference < 0) {
                setTimeout(updateCountdown, 1000); // 1초 후에 다시 시작
            }
        };

        // 1초마다 업데이트
        const intervalId = setInterval(updateCountdown, 1000);

        // 컴포넌트가 언마운트될 때 인터벌 제거
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="timer-box">
            <p className="timer-number">{timeLeft}</p>
        </div>
    );
}

export default CountdownTimer;

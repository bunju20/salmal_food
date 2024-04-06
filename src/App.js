import "./App.css";
import LogoSVG from "../src/asset/logo.svg";
import ImageSVG from "../src/asset/header.svg";
import "./component/TopTwoBox.js";
import Tag from "./component/Tag.js";
import CateBox from "./component/CateBox.js";
import HotDeal from "./component/HotDeal.js";
import BottomBanner from "../src/asset/bottom_banner.svg";
import HotDealCarousel from "./component/HotDealCarousel.js";
import Products from "./service/apiService.js";
import TopTwoService from "./service/TopTwoService.js";
import CateService from "./service/CateService.js";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
    setUid,
    setDate,
    setReferrer,
    setDevice,
    setTime,
    restoreState,
} from "./google/dataSlice.js";
import { v4 as uuidv4 } from "uuid";
import { sendDataToSpreadsheet } from "./google/sendData.jsx";
import { useSelector } from "react-redux";
import CountdownTimer from "./component/CountdownTimer.js";
import DateText from "./component/DateText.js";

function App() {
    const [currentSection, setCurrentSection] = useState("");
    const dispatch = useDispatch();
    const logoRef = useRef(null); // 로고 섹션을 위한 ref
    const categoryRef = useRef(null); // 카테고리 섹션을 위한 ref // dispatch 함수를 사용하기 위한 훅

    const API_URL = process.env.REACT_APP_HOSITAMTAM;
    const data = useSelector((state) => state.data);

    function getLocalDateTime() {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000; // 현지 시간대와 UTC의 차이를 밀리초로 계산
        const localISOTime = new Date(now - offset)
            .toISOString()
            .slice(0, 16)
            .replace("T", " ");
        return localISOTime;
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const logoPosition = logoRef.current?.offsetTop || 0; // 로고 섹션의 위치
        const categoryPosition = categoryRef.current?.offsetTop || 0; // 카테고리 섹션의 위치

        // 스크롤 위치에 따라 현재 섹션을 결정합니다.
        if (
            scrollPosition >= logoPosition &&
            scrollPosition < categoryPosition
        ) {
            setCurrentSection("Logo");
        } else if (scrollPosition >= categoryPosition) {
            setCurrentSection("Category");
        }
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                // 페이지가 다시 활성화될 때 API 호출
                sendDataToSpreadsheet(data);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, []); // 빈 종속성 배열을 사용하여 컴포넌트 마운트 시에만 이벤트 리스너를 추가

    useEffect(() => {
        // 로컬 스토리지에서 상태 불러오기
        const savedData = localStorage.getItem("appState");
        const currentTime = Date.now();
        const timeLimit = 5 * 60 * 1000; // 1분

        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // 로컬 스토리지에 저장된 시간과 현재 시간을 비교
            if (parsedData.time && currentTime - parsedData.time < timeLimit) {
                dispatch(restoreState(parsedData.state)); // 저장된 상태로 스토어 복원
            } else {
                // 10분 초과 시 UID 새로 설정
                dispatch(setUid(uuidv4()));
            }
        }
    }, [dispatch]);

    useEffect(() => {
        // 상태가 변경될 때마다 로컬 스토리지에 저장
        const stateToSave = {
            time: Date.now(),
            state: data,
        };
        localStorage.setItem("appState", JSON.stringify(stateToSave));
    }, [data]);

    useEffect(() => {
        // 컴포넌트가 마운트될 때의 시간을 기록합니다.
        const startTime = Date.now();

        const currentTime = Date.now();
        const storedUID = localStorage.getItem("userID");
        // localStorage에서 가져온 시간을 정수로 변환합니다.
        const storedTime = parseInt(localStorage.getItem("userTime"), 10); // 문자열을 정수로 변환

        const timeLimit = 5 * 60 * 1000; // 10분을 밀리초로 변환

        // 유저 ID가 있고, 저장된 시간으로부터 10분이 지나지 않았다면 기존 UID 유지
        if (storedUID && storedTime && currentTime - storedTime < timeLimit) {
            dispatch(setUid(storedUID));
        } else {
            // 그렇지 않다면 새로운 UID 생성 및 저장
            const newUID = uuidv4();
            dispatch(setUid(newUID));
            localStorage.setItem("userID", newUID);
            localStorage.setItem("userTime", currentTime.toString()); // 현재 시간을 문자열로 저장
        }

        console.log(`UID: ${data.uid}`); // UID 출력
        const formattedDateTime = getLocalDateTime();

        dispatch(setDate(formattedDateTime));

        const queryParams = new URLSearchParams(window.location.search);
        // utm_source 파라미터를 통해 방문 출처를 식별합니다.
        const source = queryParams.get("utm_source");
        // 출처에 따라 적절한 로그를 출력하거나 다른 작업을 수행합니다.
        if (source === "instagram" || source === "insta") {
            dispatch(setReferrer("Instagram"));
            // 인스타그램에서 온 경우 처리
        } else if (source === "facebook") {
            dispatch(setReferrer("facebook"));
            // 페이스북에서 온 경우 처리
        } else if (source === "toss") {
            dispatch(setReferrer("toss"));
            // 페이스북에서 온 경우 처리
        } else {
            dispatch(setReferrer("Unknown"));
            // 알 수 없는 출처에서 온 경우 처리
        }

        const userAgent = navigator.userAgent;

        // 간단한 정규식을 사용하여 모바일 기기 접속 여부를 확인합니다.
        const isMobile =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                userAgent
            );

        dispatch(setDevice(isMobile ? "Mobile" : "Desktop"));
        sendDataToSpreadsheet(data);

        // return () => {
        //     const endTime = Date.now(); // 현재 시간을 기록합니다.
        //     const timeSpentInSeconds = Math.round((endTime - startTime) / 1000); // 페이지에 머문 시간을 초 단위로 계산

        //     // 시간, 분, 초 계산
        //     const hours = Math.floor(timeSpentInSeconds / 3600);
        //     const minutes = Math.floor((timeSpentInSeconds % 3600) / 60);
        //     const seconds = timeSpentInSeconds % 60;

        //     // 시간, 분, 초를 문자열 형식으로 변환 ("몇시간 몇분 몇초")
        //     const timeSpentString = `${hours}시간 ${minutes}분 ${seconds}초`;
        //     dispatch(setTime(timeSpentString));
        //     sendDataToSpreadsheet(data);
        // };
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="responsive-square">
            <div className="App">
                <header ref={logoRef} className="App-header">
                    <img src={LogoSVG} alt="Logo" />
                </header>
                <section className="image-section">
                    <img src={ImageSVG} alt="Main Image" />
                </section>
                <section ref={categoryRef} className="text-section">
                    <span class="timing-text">지금이 타이밍!</span>{" "}
                    <span class="best-price-text">역대 최저가</span>
                    <div className="box-container">
                        <CountdownTimer />
                    </div>
                    <div className="box-container">
                        <TopTwoService />
                    </div>
                    <DateText />
                </section>
            </div>
            <CateService />

            <section className="text-section">
                <div className="hot-text">
                    <span className="cate-text-black">쟁여두기 좋은</span>{" "}
                    <span className="cate-text">살림필수템 핫딜</span>
                </div>
                <HotDealCarousel />
            </section>

            <img
                src={BottomBanner}
                alt="banner"
                style={{ marginTop: "80px" }}
            />
        </div>
    );
}

export default App;

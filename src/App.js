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
import { setUid, setDate, setReferrer, setDevice } from "./google/dataSlice.js";
import { v4 as uuidv4 } from "uuid";
import { sendDataToSpreadsheet } from "./google/sendData.jsx";
import { useSelector } from "react-redux";

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
        console.log(JSON.stringify(data)); // 상태가 업데이트된 후에 실행될 로직
        sendDataToSpreadsheet(data);
    }, [data]);

    useEffect(() => {
        // 컴포넌트가 마운트될 때의 시간을 기록합니다.
        const startTime = new Date();

        const uniqueID = uuidv4(); // 고유한 ID를 생성합니다.
        console.log("Generated unique ID:", uniqueID);
        dispatch(setUid(uniqueID)); // 생성된 고유 ID를 리덕스 스토어에 저장합니다.

        const formattedDateTime = getLocalDateTime();
        console.log("Current Local Date and Time:", formattedDateTime);
        dispatch(setDate(formattedDateTime));

        const queryParams = new URLSearchParams(window.location.search);
        // utm_source 파라미터를 통해 방문 출처를 식별합니다.
        const source = queryParams.get("utm_source");
        // 출처에 따라 적절한 로그를 출력하거나 다른 작업을 수행합니다.
        if (source === "instagram" || source === "insta") {
            console.log("User came from Instagram.");
            // 인스타그램에서 온 경우 처리
        } else if (source === "facebook") {
            console.log("User came from Facebook.");
            // 페이스북에서 온 경우 처리
        } else {
            console.log("User came from an unknown source.");
            // 알 수 없는 출처에서 온 경우 처리
        }
        dispatch(setReferrer(uniqueID));

        const userAgent = navigator.userAgent;

        // 간단한 정규식을 사용하여 모바일 기기 접속 여부를 확인합니다.
        const isMobile =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                userAgent
            );

        if (isMobile) {
            console.log("User is on a mobile device.");
        } else {
            console.log("User is on a desktop device.");
        }
        dispatch(setDevice(isMobile ? "Mobile" : "Desktop"));

        console.log("Data to be sent:", data);
        sendDataToSpreadsheet(data);

        // 클린업 함수에서 페이지를 벗어날 때의 로직을 처리합니다.
        return () => {
            const endTime = new Date(); // 현재 시간을 기록합니다.
            const timeSpent = (endTime - startTime) / 1000; // 초 단위로 계산합니다.
            console.log(`User spent ${timeSpent} seconds on the page.`);

            // 여기서 timeSpent 값을 백엔드로 보내거나 다른 처리를 할 수 있습니다.
        };
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        console.log("Current Section:", currentSection);
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
                    <div className="timers">
                        <div className="timer-box">
                            <p className="timer-number">23 : 58 : 31</p>
                        </div>
                    </div>
                    <div className="box-container">
                        <TopTwoService />
                    </div>
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

            <img src={BottomBanner} alt="banner" />
        </div>
    );
}

export default App;

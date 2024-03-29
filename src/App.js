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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUid } from "./google/dataSlice.js";
import { v4 as uuidv4 } from "uuid";

function App() {
    const dispatch = useDispatch(); // dispatch 함수를 사용하기 위한 훅

    const uniqueID = uuidv4(); // 고유한 ID를 생성합니다.
    console.log("Generated unique ID:", uniqueID);
    dispatch(setUid(uniqueID)); // 생성된 고유 ID를 리덕스 스토어에 저장합니다.

    const formattedDateTime = getLocalDateTime();
    console.log("Current Local Date and Time:", formattedDateTime);

    const API_URL = process.env.REACT_APP_HOSITAMTAM;

    function getLocalDateTime() {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000; // 현지 시간대와 UTC의 차이를 밀리초로 계산
        const localISOTime = new Date(now - offset)
            .toISOString()
            .slice(0, 16)
            .replace("T", " ");
        return localISOTime;
    }

    return (
        <div className="responsive-square">
            <div className="App">
                <header className="App-header">
                    <img src={LogoSVG} alt="Logo" />
                </header>
                <section className="image-section">
                    <img src={ImageSVG} alt="Main Image" />
                </section>
                <section className="text-section">
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

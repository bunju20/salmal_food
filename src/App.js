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

function App() {
    const API_URL = process.env.REACT_APP_HOSITAMTAM;
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

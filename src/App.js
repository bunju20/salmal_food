import "./App.css";
import LogoSVG from "../src/asset/logo.svg";
import ImageSVG from "../src/asset/header.svg";
import "./component/TopTwoBox.js";
import TopTwoBox from "./component/TopTwoBox.js";
import Tag from "./component/Tag.js";
import CateBox from "./component/CateBox.js";
import HotDeal from "./component/HotDeal.js";
import BottomBanner from "../src/asset/bottom_banner.svg";
import HotDealCarousel from "./component/HotDealCarousel.js";

function App() {
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
                        <TopTwoBox
                            productName="페레로로쉐 T8 사각 초콜릿"
                            originalPrice="12,391"
                            discountRate="21"
                            discountedPrice="9,880"
                            imageUrl="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
                            savings="2,511"
                        />
                        <TopTwoBox
                            productName="페레로로쉐 T8 사각 초콜릿"
                            originalPrice="12,391"
                            discountRate="21"
                            discountedPrice="9,880"
                            imageUrl="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
                            savings="2,511"
                        />
                    </div>
                </section>
            </div>
            <section className="gray-section">
                <span class="cate-text">카테고리 특가</span>{" "}
                <span class="cate-text-black">로 현명한 소비</span>
                <div className="tags-container">
                    <Tag>당일배송 신선식품</Tag>
                    <Tag>매일 건강 한 조각</Tag>
                    <Tag>간편조리 즉석식품 </Tag>
                </div>
                <div className="box-row">
                    <CateBox
                        price="20,780"
                        discountRate="29"
                        productName="곰곰 시나노골드 사…"
                        originalPrice="29,430"
                    />

                    <CateBox
                        price="20,780"
                        discountRate="29"
                        productName="곰곰 시나노골드 사…"
                        originalPrice="29,430"
                    />

                    <CateBox
                        price="20,780"
                        discountRate="29"
                        productName="곰곰 시나노골드 사…"
                        originalPrice="29,430"
                    />
                </div>
                <div className="box-row">
                    <CateBox
                        price="20,780"
                        discountRate="29"
                        productName="곰곰 시나노골드 사…"
                        originalPrice="29,430"
                    />

                    <CateBox
                        price="20,780"
                        discountRate="29"
                        productName="곰곰 시나노골드 사…"
                        originalPrice="29,430"
                    />

                    <CateBox
                        price="20,780"
                        discountRate="29"
                        productName="곰곰 시나노골드 사…"
                        originalPrice="29,430"
                    />
                </div>
            </section>
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

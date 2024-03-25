import './App.css';
import LogoSVG from '../src/asset/logo.svg';
import ImageSVG from '../src/asset/header.svg';
import './component/TopTwoBox.js';
import TopTwoBox from './component/TopTwoBox.js';

function App() {
  return (
    <div className="responsive-square">
      <div className="App">
      <header className="App-header">
        <img src={LogoSVG} alt="Logo" />
      </header>
      <main>
        <section className="image-section">
          <img src={ImageSVG} alt="Main Image" />
        </section>
        <section className="text-section">
        <span class="timing-text">지금이 타이밍!</span> <span class="best-price-text">역대 최저가</span>
        
        <div className="timers">
        <div className="timer-box">
      <p className="timer-number">23 : 58 : 31</p>
    </div>
    </div>
          <div className="box-container">
            <TopTwoBox />
            <TopTwoBox />
          </div>
        </section>
        <section className="text-section">
          <p>Your text here</p>
          <div className="box-row">
            <div className="box">Box 1</div>
            <div className="box">Box 2</div>
            <div className="box">Box 3</div>
          </div>
          <div className="box-row">
            <div className="box">Box 4</div>
            <div className="box">Box 5</div>
            <div className="box">Box 6</div>
          </div>
        </section>
        <section className="text-section">
          <p>Your text here</p>
          <div className="scrolling-box-container">
            { }
            {[...Array(10)].map((_, index) => (
              <div className="scrolling-box" key={index}>Box {index + 1}</div>
            ))}
          </div>
        </section>
      </main>
    </div>
    </div>
  );
}

export default App;

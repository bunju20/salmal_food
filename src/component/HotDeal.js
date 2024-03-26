import React from 'react';
import '../css/HotDeal.css'; // Import the CSS file here

function HotDeal() {
  return (
    <div className="Div-h">
      <div className="Div2-h">
        <img
          className="Img-h"
          loading="lazy"
          srcSet="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
          alt=""
        />
      </div>
      <div className="Div3-h">핫딜 1</div>
      <div className="Div4-h">
        <div className="Div5-h">26,300원</div>
        <div className="Div6-h">55%</div>
      </div>
      <div className="Div7-h">
        <div className="Div8-h">
          <div className="Div9-h">11,830원</div>
          <div className="Div10-h" />  
        </div>
        <img src={require("../asset/rocket.svg").default}
        />
      </div>
    </div>
  );
}

export default HotDeal;

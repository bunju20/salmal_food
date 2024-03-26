import React from 'react';
import '../css/cateBox.css'; // Make sure to import the CSS file here

function CateBox() {
  return (
    <div className="Div">
      <div className="Div2">
        <img
          className="Img"
          loading="lazy"
          srcSet="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
          alt=""
        />
        <div className="Div3">로켓프레시</div>
      </div>
      <div className="Div4">
        <span style={{ fontFamily: 'AppleSDGothicNeoEB', fontSize : '16px' }}>
          20,780
        </span>
        <span style={{ fontSize: '14px' }}>원</span>
      </div>
      <div className="Div5">
        <div className="Div6">29,430원</div>
        <div className="Div7">29%</div>
      </div>
      <div className="Div8">곰곰 시나노골드 사…</div>
    </div>
  );
}

export default CateBox;

/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";

function TopTwoBox() {
  return (
    <div className="flex flex-col items-start my-3.5 ml-3 p-10px bg-white rounded-xl border border-solid border-zinc-300 leading-[150%] max-w-[172px]">
      <div className="text-sm leading-4 text-neutral-700">
        페레로로쉐 T8 사각 초콜릿
        <br />
        8p, 100g, 2개
      </div>
      <div className="flex gap-1 items-center mt-1.5 text-xs">
        <div className="self-stretch my-auto text-zinc-400">12,391 원</div>
        <div className="self-stretch my-auto text-pink-400">21%</div>
        <img src={require("../asset/rocket.svg").default}
        />
      </div>
      <div className="text-xl text-pink-400">
        <span className="text-pink-400">9,880</span>
        <span className="text-sm text-pink-400"> 원</span>
      </div>
      <img
        loading="lazy"
        srcSet="https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/a44a/de5d02b54747c05109bd35d167893ac9af2253346d69212b92a33c636dd3.jpg"
        className="self-center ml-4 aspect-[1.41] max-w-[119px] w-[119px]"
      />
      <div className="justify-center text-xs text-center text-pink-400 rounded-md bg-pink-400 bg-opacity-20 btn-height">
        지금 사고 2,511원 아끼기
      </div>
    </div>
  );
}

export default TopTwoBox;
import React from "react";

function TopTwoBox({ productName, originalPrice, discountRate, discountedPrice, imageUrl, savings }) {
  return (
    <div className="flex flex-col items-start my-3.5 ml-3 p-10px bg-white rounded-xl border border-solid border-zinc-300 leading-[150%] max-w-[172px]">
      <div className="text-sm leading-4 text-neutral-700">
        {productName}
      </div>
      <div className="flex gap-1 items-center mt-1.5 text-xs">
        <div className="self-stretch my-auto text-zinc-400">{originalPrice} 원</div>
        <div className="self-stretch my-auto text-pink-400">{discountRate}%</div>
        {/* 이미지 경로는 props로 받은 것이 아니므로 변경하지 않았습니다. 필요에 따라 조정하세요. */}
        <img src={require("../asset/rocket.svg").default} />
      </div>
      <div className="text-xl text-pink-400">
        <span className="text-pink-400">{discountedPrice}</span>
        <span className="text-sm text-pink-400"> 원</span>
      </div>
      <img
        loading="lazy"
        srcSet={imageUrl}
        className="self-center ml-4 aspect-[1.41] max-w-[119px] w-[119px]"
      />
      <div className="justify-center text-xs text-center text-pink-400 rounded-md bg-pink-400 bg-opacity-20 btn-height">
        지금 사고 {savings}원 아끼기
      </div>
    </div>
  );
}

export default TopTwoBox;

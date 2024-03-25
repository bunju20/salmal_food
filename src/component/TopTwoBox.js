import * as React from "react";

function TopTwoBox() {
  return (
    <div className="flex flex-col items-start py-3.5 pl-3 bg-white rounded-xl border border-solid border-zinc-300 leading-[150%] max-w-[172px]">
      <div className="text-sm leading-4 text-neutral-700">
        페레로로쉐 T8 사각 초콜릿
        <br />
        8p, 100g, 2개
      </div>
      <div className="flex gap-1 items-center mt-1.5 text-xs">
        <div className="self-stretch my-auto text-zinc-400">12,391 원</div>
        <div className="self-stretch my-auto text-pink-400">21%</div>
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 self-stretch aspect-[2.63] w-[42px]"
        />
      </div>
      <div className="text-xl text-pink-400">
        <span className="text-pink-400">9,880</span>
        <span className="text-sm text-pink-400"> 원</span>
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="self-center ml-4 aspect-[1.41] max-w-[119px] w-[119px]"
      />
      <div className="justify-center px-4 py-2.5 text-xs text-center text-pink-400 rounded-md bg-pink-400 bg-opacity-20">
        지금 사고 2,511원 아끼기
      </div>
    </div>
  );
}

export default TopTwoBox;
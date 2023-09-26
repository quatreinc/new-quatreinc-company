import Link from "next/link";
import React, { FC } from "react";

type Props = {
  width?: string;
  px?: string;
  py?: string;
  color?: "brown" | "white";
  text?: string;
  target?: string;
  link: string;
};

export const LinkButtonMemo: FC<Props> = ({
  width = "w-[190px]",
  px = "px-4",
  py = "py-2",
  color = "white",
  text = "詳しくはこちら",
  link = "/",
  target = "",
}) => {
  return (
    <Link
      href={link}
      prefetch={false}
      className={`borderArrowBtn inline-block border rounded-full relative transition-colors duration-300 text-center ${width} ${px} ${py} ${
        color === "white"
          ? "border-white text-white hover:bg-white hover:text-[#401d00]"
          : "border-[#401d00] text-[#401d00] hover:bg-[#401d00] hover:text-white"
      }`}
    >
      {text}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="inline-block absolute top-[50%] right-3 transform -translate-y-1/2"
      >
        <g
          id="Icon_feather-arrow-right"
          data-name="Icon feather-arrow-right"
          transform="translate(-6.5 -6.5)"
        >
          <path
            id="パス_40"
            data-name="パス 40"
            d="M17.5,19H7.5a1,1,0,0,1,0-2h10a1,1,0,0,1,0,2Z"
            transform="translate(0 -5.5)"
          />
          <path
            id="パス_41"
            data-name="パス 41"
            d="M18,18.5a1,1,0,0,1-.707-1.707L21.586,12.5,17.293,8.207a1,1,0,0,1,1.414-1.414l5,5a1,1,0,0,1,0,1.414l-5,5A1,1,0,0,1,18,18.5Z"
            transform="translate(-5.5)"
          />
        </g>
      </svg>
    </Link>
  );
};

export const LinkButton = React.memo(LinkButtonMemo);

import Image from "next/image";
import React, { FC, MutableRefObject } from "react";
import styles from "@/styles/Footer.module.css";
type Props = {
  setRef?: MutableRefObject<null>;
};

export const Footer: FC<Props> = (props) => {
  return (
    <footer ref={props.setRef}>
      <div className="z-20 relative border-t bg-[#401d00] py-12">
        <div className="lContainerl">
          <div className="flex justify-between gap-12">
            <div className="w-3/12 flex flex-col items-center">
              <p className="mb-10 w-[18vw]">
                <Image
                  src="/img/common/logo.svg"
                  alt="Quatre.inc"
                  width="258"
                  height="83"
                />
              </p>
              <p className="text-white text-center">
                楽しいをもっと身近に
                <br />
                楽しいをもっと共有しよう
              </p>
            </div>
            <div className="w-9/12 text-white flex gap-20">
              <ul>
                <li>
                  <a href="">
                    <div>
                      <p className="montserrat font-bold text-3xl text-[1.8vw]">
                        News
                      </p>
                      <p className=" text-[1vw]">ニュース</p>
                    </div>
                  </a>
                </li>
                <li className="mt-8">
                  <a href="">
                    <div>
                      <p className="montserrat font-bold text-3xl text-[1.8vw]">
                        Magazine
                      </p>
                      <p className=" text-[1vw]">マガジン</p>
                    </div>
                  </a>
                </li>
              </ul>
              <div>
                <div>
                  <a href="">
                    <p className="montserrat font-bold text-3xl text-[1.8vw]">
                      Business
                    </p>
                    <p className=" text-[1vw]">ビジネス</p>
                  </a>
                </div>
                <ul className="mt-3 text-[1vw]">
                  <li className="mb-1">
                    <a href="">IT事業</a>
                  </li>
                  <li className="mb-1">
                    <a href="">コミュニティ事業</a>
                  </li>
                  <li className="mb-1">
                    <a href="">広告代理事業</a>
                  </li>
                  <li className="mb-1">
                    <a href="">コンサルティング事業</a>
                  </li>
                  <li className="mb-1">
                    <a href="">社会福祉事業</a>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <a href="">
                    <p className="montserrat font-bold text-3xl text-[1.8vw]">
                      About
                    </p>
                    <p className=" text-[1vw]">企業情報</p>
                  </a>
                </div>
                <ul className="mt-3 text-[1vw]">
                  <li className="mb-1 w-24">
                    <a href="">CEOメッセージ</a>
                  </li>
                  <li className="mb-1">
                    <a href="">会社概要</a>
                  </li>
                  <li className="mb-1">
                    <a href="">アクセス</a>
                  </li>
                </ul>
              </div>
              <div>
                <div className="relative">
                  <a
                    href=""
                    className="hover:opacity-75 transition-opacity duration-500"
                  >
                    <p className={styles.footerMov}>
                      KENJA
                      GLOBAL（賢者グローバル）に当社社長が取材を受けました！
                    </p>
                  </a>
                </div>
                <a
                  href=""
                  className="block max-w-[380px] bg-[#ead2aa] py-10 mt-5"
                >
                  <p
                    className={`text-[#401d00] text-[1vw] font-bold text-center relative footerContent ${styles.footerContent}`}
                  >
                    <span className="montserrat">Contact</span>
                    <br />
                    お問い合わせ
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <small className="mt-20 text-center text-white block">
          © Copyright 2023 quatreinc
        </small>
      </div>
    </footer>
  );
};

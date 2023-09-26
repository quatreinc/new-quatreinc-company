import Image from "next/image";
import React, { ComponentProps, FC, MutableRefObject, useState } from "react";
import styles from "@/styles/Footer.module.css";

type Props = {
  setRef?: MutableRefObject<null>;
};

type PlusOpen = {
  about: boolean;
  business: boolean;
};

export const FooterMemo: FC<Props> = (props) => {
  const [isPlusOpen, setIsPlusOpen] = useState<PlusOpen>({
    about: false,
    business: false,
  });

  const togglePlus: ComponentProps<"button">["onClick"] = (e) => {
    const id = e.currentTarget.id;
    if (id === "about") {
      setIsPlusOpen({
        ...isPlusOpen,
        about: !isPlusOpen.about,
      });
    } else if (id === "business") {
      setIsPlusOpen({
        ...isPlusOpen,
        business: !isPlusOpen.business,
      });
    }
  };

  return (
    <footer ref={props.setRef}>
      <div className="z-20 relative border-t bg-[#401d00] py-12">
        <div className={styles.footerWrap}>
          <div className="flex flex-col sm:flex-row justify-between gap-12">
            <div className="w-full sm:w-3/12 flex flex-col items-center">
              <p className="mb-5 sm:mb-10 sm:w-[18vw]">
                <Image
                  src="/img/common/logo.svg"
                  alt="Quatre.inc"
                  width="258"
                  height="83"
                />
              </p>
              <p className="text-white text-center sm:text-[1.5vw] lg:text-base">
                楽しいをもっと身近に
                <br />
                楽しいをもっと共有しよう
              </p>
            </div>
            <div className="w-full sm:w-9/12 text-white flex flex-col sm:flex-row am:gap-3 xl:gap-20">
              <div className="flex flex-col sm:flex-row sm:gap-16 md:gap-8 xl:gap-20">
                <ul>
                  <li>
                    <a
                      href=""
                      className="block py-5 sm:py-0 px-5 sm:px-0 border-t sm:border-t-0 hover:opacity-60 transition-opacity duration-500 bg-[#401d00]"
                    >
                      <div className="flex sm:block items-center gap-2">
                        <p className="montserrat font-bold text-[5vw] sm:text-[1.8vw]">
                          News
                        </p>
                        <p className="sm:text-[1vw]">ニュース</p>
                      </div>
                    </a>
                  </li>
                  <li className="sm:mt-8">
                    <a
                      href=""
                      className="block py-5 sm:py-0 px-5 sm:px-0 border-t sm:border-t-0 hover:opacity-60 transition-opacity duration-500"
                    >
                      <div className="flex sm:block items-center gap-2">
                        <p className="montserrat font-bold text-[5vw] sm:text-[1.8vw]">
                          Magazine
                        </p>
                        <p className="sm:text-[1vw]">マガジン</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <div>
                  <a
                    href=""
                    className="py-5 sm:py-0 px-5 sm:px-0 border-t sm:border-t-0 hover:opacity-60 transition-opacity duration-500 hidden sm:block"
                  >
                    <div className="flex sm:block items-center gap-2 plus">
                      <p className="montserrat font-bold text-[5vw] sm:text-[1.8vw]">
                        Business
                      </p>
                      <p className="sm:text-[1vw]">ビジネス</p>
                    </div>
                  </a>
                  <button
                    className="w-full py-5 sm:py-0 px-5 sm:px-0 border-t sm:border-t-0 block sm:hidden"
                    id="business"
                    onClick={togglePlus}
                  >
                    <div
                      className={`flex sm:block items-center gap-2 plus ${
                        isPlusOpen.business ? "plusMinus" : ""
                      }`}
                    >
                      <p className="montserrat font-bold text-[5vw] sm:text-[1.8vw]">
                        Business
                      </p>
                      <p className="sm:text-[1vw]">ビジネス</p>
                    </div>
                  </button>
                  <div
                    className={`${styles.footerSubMenu} ${
                      isPlusOpen.business ? styles.footerSubMenuShow : ""
                    }`}
                  >
                    <ul className="pb-5 sm:py-0 px-10 sm:px-0">
                      <li className="mb-3 sm:mb-1">
                        <a
                          href=""
                          className="hover:opacity-60 transition-opacity duration-500"
                        >
                          IT事業
                        </a>
                      </li>
                      <li className="mb-3 sm:mb-1">
                        <a
                          href=""
                          className="hover:opacity-60 transition-opacity duration-500"
                        >
                          コミュニティ事業
                        </a>
                      </li>
                      <li className="mb-3 sm:mb-1">
                        <a
                          href=""
                          className="hover:opacity-60 transition-opacity duration-500"
                        >
                          広告代理事業
                        </a>
                      </li>
                      <li className="mb-3 sm:mb-1">
                        <a
                          href=""
                          className="hover:opacity-60 transition-opacity duration-500"
                        >
                          コンサルティング事業
                        </a>
                      </li>
                      <li className="mb-3 sm:mb-1">
                        <a
                          href=""
                          className="hover:opacity-60 transition-opacity duration-500"
                        >
                          社会福祉事業
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <a
                    href=""
                    className="py-5 sm:py-0 px-5 sm:px-0 hover:opacity-60 transition-opacity duration-500 hidden sm:block"
                  >
                    <div className="flex sm:block items-center gap-2 plus">
                      <p className="montserrat font-bold text-[5vw] sm:text-[1.8vw]">
                        About
                      </p>
                      <p className="sm:text-[1vw]">企業情報</p>
                    </div>
                  </a>
                  <button
                    className="w-full py-5 sm:py-0 px-5 sm:px-0 border-t sm:border-t-0 block sm:hidden"
                    id="about"
                    onClick={togglePlus}
                  >
                    <div
                      className={`flex sm:block items-center gap-2 plus ${
                        isPlusOpen.about ? "plusMinus" : ""
                      }`}
                    >
                      <p className="montserrat font-bold text-[5vw] sm:text-[1.8vw]">
                        About
                      </p>
                      <p className="sm:text-[1vw]">企業情報</p>
                    </div>
                  </button>
                  <div
                    className={`border-b sm:border-b-0 ${
                      styles.footerSubMenu
                    } ${isPlusOpen.about ? styles.footerSubMenuShow : ""}`}
                  >
                    <ul className="pb-5 sm:py-0 px-10 sm:px-0">
                      <li className="mb-3 sm:mb-1 sm:w-28">
                        <a
                          href=""
                          className="hover:opacity-60 transition-opacity duration-500"
                        >
                          CEOメッセージ
                        </a>
                      </li>
                      <li className="mb-3 sm:mb-1">
                        <a
                          href=""
                          className="hover:opacity-60 transition-opacity duration-500"
                        >
                          会社概要
                        </a>
                      </li>
                      <li className="mb-3 sm:mb-1">
                        <a
                          href=""
                          className="hover:opacity-60 transition-opacity duration-500"
                        >
                          アクセス
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-10 sm:mt-0">
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
                  className="block max-w-[380px] bg-[#ead2aa] mx-auto py-5 sm:py-2 md:py-5 lg:py-7 mt-5"
                >
                  <p
                    className={`text-[#401d00] text-[3.8647342995vw] sm:text-[1vw] font-bold text-center relative footerContent ${styles.footerContent}`}
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
        <small className="mt-10 text-center text-white block">
          © Copyright 2023 quatreinc
        </small>
      </div>
    </footer>
  );
};

export const Footer = React.memo(FooterMemo);

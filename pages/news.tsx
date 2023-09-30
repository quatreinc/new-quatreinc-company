import { Layout } from "@/components/Layout";
import { useParallax } from "@/hooks/useParallax";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { NewsList } from "@/components/NewsList";

const News = () => {
  const [isArchive, setIsArchive] = useState("2023");
  const elements = [
    {
      id: "archive",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "news",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "last",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
  ];

  const parallaxEffect = useRef<HTMLDivElement | null>(null);

  const { elementsObject } = useParallax({
    elementsProps: elements,
    textContentProps: undefined,
    parallaxEffect,
  });

  return (
    <Layout
      title="ビジネス | Quatre Inc. | キャトル株式会社"
      description="ビジネスページ。たのしいをもっと身近にたのしいをもっと共有しよう。価値を提供し続け、地球上の笑顔を創造する。 笑顔のリーディングカンパニーを目指す。"
      color="white"
      setRef={elementsObject.last?.ref}
    >
      <div className="bg-[#401d00] h-[300px] sm:h-[500px] flex items-center pt-10 overflow-x-hidden">
        <motion.div
          animate={{ opacity: [0, 1], x: [20, 0] }}
          transition={{ duration: 1 }}
          className="text-white lContainerl"
        >
          <p className="montserrat text-[10vw] sm:text-6xl font-bold text-[#fff0de]">
            NEWS
          </p>
          <h1 className="text-[#fff0de]">ニュース</h1>
        </motion.div>
      </div>
      <div className="bg-[#ead2ab] xl:min-h-[100vh] py-16 sm:py-28">
        <div className="lContainerl text-[#401d00] sm:flex gap-20">
          <motion.ul
            animate={
              elementsObject.archive?.hasAnimated
                ? { opacity: [0, 1], y: [15, 0] }
                : {}
            }
            transition={{ delay: 0.1, duration: 0.5 }}
            className="montserrat font-bold leading-none flex sm:block flex-wrap items-start gap-3 mb-5 sm:mb-0 opacity-0"
            ref={elementsObject.archive?.ref}
          >
            <li>
              <button
                className={`${
                  isArchive === "2023"
                    ? "text-[6vw] sm:text-4xl mb-3 flex items-center gap-2 flex-col sm:flex-row"
                    : "pt-1 sm:mb-4"
                }`}
                onClick={() => setIsArchive("2023")}
              >
                2023
                {isArchive === "2023" && (
                  <Image
                    src="/img/icon/arrow-right-brown.svg"
                    alt="矢印"
                    width={17}
                    height={17}
                    className="transform rotate-90 sm:rotate-0"
                  />
                )}
              </button>
            </li>
            <li>
              <button
                className={`${
                  isArchive === "2022"
                    ? "text-[6vw] sm:text-4xl mb-3 flex items-center gap-2 flex-col sm:flex-row"
                    : "pt-1 sm:mb-4"
                }`}
                onClick={() => setIsArchive("2022")}
              >
                2022
                {isArchive === "2022" && (
                  <Image
                    src="/img/icon/arrow-right-brown.svg"
                    alt="矢印"
                    width={17}
                    height={17}
                    className="transform rotate-90 sm:rotate-0"
                  />
                )}
              </button>
            </li>
            <li>
              <button
                className={`${
                  isArchive === "2021"
                    ? "text-[6vw] sm:text-4xl mb-3 flex items-center gap-2 flex-col sm:flex-row"
                    : "pt-1 sm:mb-4"
                }`}
                onClick={() => setIsArchive("2021")}
              >
                2021
                {isArchive === "2021" && (
                  <Image
                    src="/img/icon/arrow-right-brown.svg"
                    alt="矢印"
                    width={17}
                    height={17}
                    className="transform rotate-90 sm:rotate-0"
                  />
                )}
              </button>
            </li>
          </motion.ul>
          <motion.div
            animate={
              elementsObject.news?.hasAnimated
                ? { opacity: [0, 1], y: [15, 0] }
                : {}
            }
            transition={{ delay: 0.3, duration: 0.5 }}
            ref={elementsObject.news?.ref}
            className="opacity-0"
          >
            <NewsList
              buttonBorderColor={"border-[#401d00]"}
              currentColor={"bg-[#401d00] text-white"}
              notCurrentColor={
                "text-[#401d00] hover:bg-[#401d00] hover:text-white"
              }
              lineColor={"border-[#401d00]"}
            />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default News;

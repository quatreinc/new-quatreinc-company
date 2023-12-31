import { Layout } from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { LinkButton } from "@/components/LinkButton";
import { Parallax } from "react-parallax";
import { useParallax } from "@/hooks/useParallax";
import { UAParser } from "ua-parser-js";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { NewsList } from "@/components/NewsList";

export default function Home() {
  const [activeTab, setActiveTab] = useState("全て");

  const handleTagClick = useCallback((target: string) => {
    setActiveTab(target);
  }, []);

  const textContent = "Bring fun closer. Let’s share more fun. ";
  const [device, setDevice] = useState<string | undefined>(undefined);
  const elements = [
    { id: "element1", isVisible: false, ref: useRef(null), hasAnimated: false },
    { id: "element2", isVisible: false, ref: useRef(null), hasAnimated: false },
    { id: "element3", isVisible: false, ref: useRef(null), hasAnimated: false },
    {
      id: "middleCatch1",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "middleCatch2",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "middleCatch3",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "middleCatch4",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "middleCatch5",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "middleCatch6",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "middleCatch7",
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
      id: "business1",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "business2",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "business3",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "business4",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "business5",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "business6",
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

  const parallaxEffect = useRef<HTMLLIElement | null>(null);

  const { elementsObject, offsetY, scrollX, repeatedText } = useParallax({
    elementsProps: elements,
    textContentProps: textContent,
    parallaxEffect,
  });

  useSmoothScroll({ gestureOrientation: "vertical" });

  useEffect(() => {
    const parser = new UAParser();
    setDevice(parser.getDevice().type);
  }, [device]);

  return (
    <>
      <Layout
        title="Quatre Inc. | キャトル株式会社"
        description="たのしいをもっと身近にたのしいをもっと共有しよう。価値を提供し続け、地球上の笑顔を創造する。 笑顔のリーディングカンパニーを目指す。"
        color="white"
        setRef={elementsObject.last?.ref}
      >
        <div className="h-[100vh] brownBgColor flex justify-center items-center w-full z-0 top-0 left-0 fixed">
          <div>
            <div
              className={`${
                (elementsObject.last?.isVisible && device !== "mobile") ||
                (elementsObject.last?.isVisible && device !== "tablet")
                  ? "transition-all duration-1000 translate-y-[-500px] opacity-0"
                  : "transition-all duration-1000 translate-y-0 opacity-100"
              }`}
            >
              <h2 className="text-white text-[8vw] yuGothic font-bold leading-tight">
                <motion.span
                  animate={{ opacity: [0, 1], y: [15, 0] }}
                  transition={{ delay: 0, duration: 0.5 }}
                  className="inline-block"
                >
                  たのしい
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1], y: [15, 0] }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-[3vw] inline-block"
                >
                  を
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1], y: [15, 0] }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="inline-block"
                >
                  もっと身近
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1], y: [15, 0] }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="text-[3vw] inline-block"
                >
                  に
                </motion.span>
                <br />
                <motion.span
                  animate={{ opacity: [0, 1], y: [15, 0] }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="inline-block"
                >
                  たのしい
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1], y: [15, 0] }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="text-[3vw] inline-block"
                >
                  を
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1], y: [15, 0] }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="inline-block"
                >
                  もっと共有
                </motion.span>
                <motion.span
                  animate={{ opacity: [0, 1], y: [15, 0] }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="text-[3vw] inline-block"
                >
                  しよう
                </motion.span>
              </h2>
              <motion.p
                animate={{ opacity: [0, 1], y: [15, 0] }}
                transition={{ delay: 2.3, duration: 0.5 }}
                className="text-white"
              >
                Bring fun closer.
                <br />
                Let’s share more fun.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="h-[80vh] sm:h-[90vh]"></div>
        <Parallax
          bgImage={"/img/top/attention-img1.jpg"}
          strength={200}
          bgClassName="hW-120pa object-cover"
          contentClassName="h-full"
          className="w-11/12 sm:w-8/12 xl:w-1/2 h-[420px] sm:h-[630px] relative z-10 mx-auto sm:mr-10 sm:float-right"
        >
          <div
            ref={elementsObject.element1?.ref}
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[500px] w-11/12 z-20  ${
              elementsObject.element1?.isVisible
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0 transition-opacity duration-500"
            }`}
          >
            <p>
              <Image
                src="/img/top/attention-img1-content-img.png"
                alt="社会福祉・医療専門M&A シャフク"
                width={886}
                height={986}
              />
            </p>
            <p className="text-center text-white">
              社会福祉・医療専門M&A
              <br />
              シャフク
            </p>
          </div>
          <p
            className={`bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0 z-10 ${
              elementsObject.element1?.isVisible
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0 transition-opacity duration-500"
            }`}
          ></p>
        </Parallax>
        <Parallax
          bgImage={"/img/top/attention-img2.jpg"}
          strength={200}
          bgClassName="hW-120pa object-cover"
          contentClassName="h-full"
          className="w-11/12 sm:w-8/12 xl:w-1/2 top-64 sm:top-96 h-[420px] sm:h-[520px] relative z-10 mx-auto sm:ml-10 sm:float-left"
        >
          <div
            ref={elementsObject.element2?.ref}
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] z-20  ${
              elementsObject.element2?.isVisible
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0 transition-opacity duration-500"
            }`}
          >
            <p className="w-6/12 mx-auto mb-10">
              <Image
                src="/img/top/attention-img2-content-img.png"
                alt="趣味で繋がるアプリ Quatre"
                width={439}
                height={499}
              />
            </p>
            <p className="text-center text-white">
              趣味で繋がるアプリ
              <br />
              Quatre
            </p>
          </div>
          <p
            className={`bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0 z-10 ${
              elementsObject.element2?.isVisible
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0 transition-opacity duration-500"
            }`}
          ></p>
        </Parallax>
        <div className="clear-both"></div>
        <Parallax
          bgImage={"/img/top/attention-img3.jpg"}
          strength={200}
          bgClassName="hW-120pa object-cover"
          contentClassName="h-full"
          className="w-11/12 sm:w-8/12 xl:w-1/2 mt-[520px] sm:mt-[900px] h-[360px] sm:h-[500px] relative z-10 mx-auto mb-60 sm:mb-96"
        >
          <div
            ref={elementsObject.element3?.ref}
            className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-10/12 z-20  ${
              elementsObject.element3?.isVisible
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0 transition-opacity duration-500"
            }`}
          >
            <p className="text-center text-white">
              KENJA GLOBAL（賢者グローバル）に
              <br />
              当社社長が取材を受けました！
            </p>
            <p className="text-center mt-5">
              <LinkButton
                link={"https://www.kenja.tv/president/detk5d5zb.html"}
              />
            </p>
          </div>
          <p
            className={`bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0 z-10 ${
              elementsObject.element3?.isVisible
                ? "opacity-100 transition-opacity duration-500"
                : "opacity-0 transition-opacity duration-500"
            }`}
          ></p>
        </Parallax>
        <Parallax
          bgImage={"/img/top/city-desc.jpg"}
          strength={300}
          bgClassName="object-cover"
          contentClassName="h-full"
        >
          <section>
            <div className="flex justify-center items-center h-[100vh] w-full px-5">
              <div className="flex flex-col items-center">
                <motion.p
                  className="w-72 mb-5 opacity-0"
                  ref={elementsObject.middleCatch1?.ref}
                  animate={
                    elementsObject.middleCatch1?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : {}
                  }
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Image
                    src="./img/common/logo.svg"
                    alt="Quatre.inc"
                    width={396}
                    height={127}
                  />
                </motion.p>
                <h2 className="text-white text-[6vw] sm:text-4xl leading-relaxed font-bold text-center">
                  <motion.span
                    className="text-[#efcaca] inline-block opacity-0"
                    ref={elementsObject.middleCatch2?.ref}
                    animate={
                      elementsObject.middleCatch2?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : {}
                    }
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    価値を提供
                  </motion.span>
                  <motion.span
                    className="inline-block opacity-0"
                    ref={elementsObject.middleCatch3?.ref}
                    animate={
                      elementsObject.middleCatch3?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : {}
                    }
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    し続け、
                  </motion.span>
                  <motion.span
                    className="inline-block opacity-0"
                    ref={elementsObject.middleCatch4?.ref}
                    animate={
                      elementsObject.middleCatch4?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : {}
                    }
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    地球上の笑顔を創造する。
                  </motion.span>
                  <br />
                  <motion.span
                    className="text-[#efcaca] inline-block opacity-0"
                    ref={elementsObject.middleCatch5?.ref}
                    animate={
                      elementsObject.middleCatch5?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : {}
                    }
                    transition={{ delay: 1.5, duration: 0.5 }}
                  >
                    笑顔のリーディングカンパニー
                  </motion.span>
                  <motion.span
                    className="inline-block opacity-0"
                    ref={elementsObject.middleCatch6?.ref}
                    animate={
                      elementsObject.middleCatch6?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : {}
                    }
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    を目指す。
                  </motion.span>
                </h2>
                <motion.p
                  className="text-white opacity-0 mt-5 leading-loose sm:text-center"
                  ref={elementsObject.middleCatch7?.ref}
                  animate={
                    elementsObject.middleCatch7?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : {}
                  }
                  transition={{ delay: 2.1, duration: 0.5 }}
                >
                  デジタルとアナログの融合で人々の交流を深めるとともに、
                  <br className="hidden sm:inline" />
                  時間を忘れる楽しい空間の創出や趣味を活かしたビジネス空間の提供など、
                  <br className="hidden sm:inline" />
                  様々なサービスの展開を積極的に進めております。
                  <br className="hidden sm:inline" />
                  今後とも新しいサービスやアプリの開発に続けて取り組んでまいります。
                </motion.p>
              </div>
            </div>
          </section>
        </Parallax>
        <section className="top-0" ref={elementsObject.news?.ref}>
          <div className="lContainerM flex flex-col sm:flex-row gap-20 bg-[#401d00] relative py-20 sm:py-32 mb-32">
            <motion.div
              animate={
                elementsObject.news?.hasAnimated
                  ? { opacity: [0, 1], y: [15, 0] }
                  : {}
              }
              transition={{ delay: 0.1, duration: 0.5 }}
              className="opacity-0"
            >
              <motion.div
                animate={elementsObject.news?.hasAnimated ? { scale: 1.3 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col items-center text-white scale-0"
              >
                <p className="flex items-center gap-1">
                  <Image
                    src="/img/common/symbol.svg"
                    alt="quatre Symbol"
                    width={20}
                    height={20}
                  />
                  ニュース
                </p>
                <h2 className="text-[8vw] sm:text-4xl montserrat font-bold">
                  News
                </h2>
              </motion.div>
              <div className="mt-10 flex justify-center">
                <LinkButton
                  text={"More"}
                  px={"px-2"}
                  width={"w-[130px]"}
                  link=""
                />
              </div>
            </motion.div>
            <motion.div
              animate={
                elementsObject.news?.hasAnimated
                  ? { opacity: [0, 1], y: [15, 0] }
                  : {}
              }
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white opacity-0"
            >
              <NewsList
                buttonBorderColor={"border-white"}
                currentColor={"bg-white text-[#401d00]"}
                notCurrentColor={
                  "text-white hover:bg-white hover:text-[#401d00]"
                }
                lineColor={"border-white"}
              />
            </motion.div>
          </div>
        </section>
        <section>
          <div className="relative z-20 bg-white pt-20 sm:pt-32 block xl:hidden">
            <div className="flex justify-center">
              <div className="flex flex-col items-center text-[#401d00]">
                <p className="flex items-center gap-1">
                  <Image
                    src="/img/common/symbol.svg"
                    alt="quatre Symbol"
                    width={20}
                    height={20}
                  />{" "}
                  ビジネス
                </p>
                <h2 className="text-[10vw] sm:text-6xl montserrat font-bold">
                  Business
                </h2>
              </div>
            </div>
            <p className="text-[#401d00] font-bold mt-2 text-center">
              Quatre.Incが手掛けるビジネスをご紹介します。
              <br />
              私たちは、常に価値を提供することで、
              <br />
              人々の笑顔を増やすことに取り組んでいます。
            </p>
            <ul>
              <li>
                <div className="lContainerM pt-20 sm:pt-32 pb-12 sm:pb-20">
                  <p>01.Information Technology</p>
                  <h2 className="text-3xl font-bold mb-5">IT事業</h2>
                  <p>
                    IT事業は、現代社会のイノベーションの先頭を走る分野となっています。日々進化するテクノロジーを活用し、ビジネスや日常生活をより便利かつ効率的にするソリューションを提供します。この分野での取り組みは、社会の持続的な成長を支えるとともに、新しいビジネスチャンスを創出しています。顧客のニーズを正確に捉え、先進技術を組み合わせることで、未来のライフスタイルや業務プロセスを再定義する可能性が広がっています。
                  </p>
                  <div className="mt-5 flex">
                    <LinkButton
                      text={"More"}
                      px={"px-2"}
                      width={"w-[130px]"}
                      color="brown"
                      link=""
                    />
                  </div>
                </div>
                <Parallax
                  bgImage={"/img/top/business-it-sp.jpg"}
                  strength={200}
                  bgClassName="object-cover"
                  contentClassName="h-[250px] sm:h-[400px]"
                ></Parallax>
              </li>
              <li>
                <div className="lContainerM pt-20 sm:pt-32 pb-12 sm:pb-20">
                  <p>02.Mergers and Acquisitions</p>
                  <h2 className="text-3xl font-bold mb-5">M&A事業</h2>
                  <p>
                    Quatre.IncのM&A事業は、新しい可能性を追求し、強力なシナジーを生む道を開きます。異なる企業の知識や技術を統合し、共同での成長を実現することが私たちの目標です。M&Aを通じて、持続可能な競争力を築き、業界のリーダーシップを確立し、お客様に更なるサービスと価値を提供いたします。
                  </p>
                  <div className="mt-5 flex">
                    <LinkButton
                      text={"More"}
                      px={"px-2"}
                      width={"w-[130px]"}
                      color="brown"
                      link=""
                    />
                  </div>
                </div>
                <Parallax
                  bgImage={"/img/top/business-ma-sp.jpg"}
                  strength={200}
                  bgClassName="object-cover"
                  contentClassName="h-[250px] sm:h-[400px]"
                ></Parallax>
              </li>
              <li>
                <div className="lContainerM pt-20 sm:pt-32 pb-12 sm:pb-20">
                  <p>03.Community</p>
                  <h2 className="text-3xl font-bold mb-5">コミュニティ事業</h2>
                  <p>
                    Quatre.Incのコミュニティは、人々を繋ぎ合わせ、共通の価値や目的を共有する場を提供します。
                    私たちのサービスを通じて、日々の生活に笑顔をもたらすことを目指しています。
                    一人ひとりの幸せな瞬間を増やすために、最適なコミュニティとの出会いをサポートします。
                  </p>
                  <div className="mt-5 flex">
                    <LinkButton
                      text={"More"}
                      px={"px-2"}
                      width={"w-[130px]"}
                      color="brown"
                      link=""
                    />
                  </div>
                </div>
                <Parallax
                  bgImage={"/img/top/business-community-sp.jpg"}
                  strength={200}
                  bgClassName="object-cover"
                  contentClassName="h-[250px] sm:h-[400px]"
                ></Parallax>
              </li>
              <li>
                <div className="lContainerM pt-20 sm:pt-32 pb-12 sm:pb-20">
                  <p>04.Advertising</p>
                  <h2 className="text-3xl font-bold mb-5">広告代理事業</h2>
                  <p>
                    Quatre.Incは、デジタルからアナログまで、多彩なプロモーションをトータルにサポートします。ホームページの集客、
                    店頭の楽しい企画、即効のリスティング広告、街中の注目の看板、そして心を掴むノベルティの提案。
                    お客様の目と心をキャッチする最適な戦略を展開しております。
                  </p>
                  <div className="mt-5 flex">
                    <LinkButton
                      text={"More"}
                      px={"px-2"}
                      width={"w-[130px]"}
                      color="brown"
                      link=""
                    />
                  </div>
                </div>
                <Parallax
                  bgImage={"/img/top/business-advertising-sp.jpg"}
                  strength={200}
                  bgClassName="object-cover"
                  contentClassName="h-[250px] sm:h-[400px]"
                ></Parallax>
              </li>
              <li>
                <div className="lContainerM pt-20 sm:pt-32 pb-12 sm:pb-20">
                  <p>05.Consulting</p>
                  <h2 className="text-3xl font-bold mb-5">
                    コンサルティング事業
                  </h2>
                  <p>
                    Quatre.Incは、サブスクサービスの革命的な提案から、効果的なウェブ戦略、そして人材育成のサポート
                    までトータルに手がけます。時代のニーズを捉え、ITを最大限活用しながら、事業の成長と継続的な成功を
                    サポートします。事業の拡大、品質の向上、チームの結束により、新しい可能性を追求いたします。
                  </p>
                  <div className="mt-5 flex">
                    <LinkButton
                      text={"More"}
                      px={"px-2"}
                      width={"w-[130px]"}
                      color="brown"
                      link=""
                    />
                  </div>
                </div>
                <Parallax
                  bgImage={"/img/top/business-consulting-sp.jpg"}
                  strength={200}
                  bgClassName="object-cover"
                  contentClassName="h-[250px] sm:h-[400px]"
                ></Parallax>
              </li>
              <li>
                <div className="lContainerM pt-20 sm:pt-32 pb-12 sm:pb-20">
                  <p>06.Social Welfare</p>
                  <h2 className="text-3xl font-bold mb-5">社会福祉事業</h2>
                  <p>
                    高齢者たちに安全かつ快適な生活空間を提供します。日常生活のサポートや医療的ケア、コミュニティ活動
                    への参加などをサポートします。
                    心身の健康を維持し、孤独感を軽減し、質の高い生活を享受するための場として不可欠です。
                    高齢者一人一人のニーズに応じて、多様なサービスやプログラムを展開しております。
                  </p>
                  <div className="mt-5 flex">
                    <LinkButton
                      text={"More"}
                      px={"px-2"}
                      width={"w-[130px]"}
                      color="brown"
                      link=""
                    />
                  </div>
                </div>
                <Parallax
                  bgImage={"/img/top/business-social-welfare-sp.jpg"}
                  strength={200}
                  bgClassName="object-cover"
                  contentClassName="h-[250px] sm:h-[400px]"
                ></Parallax>
              </li>
            </ul>
          </div>
          <div className="relative z-20 bg-white hidden xl:block">
            <div className="lContainerM flex gap-20 justify-between">
              <div className="w-6/12">
                <div className="stickyTop pt-20 top-10 h-[100vh]">
                  <div className="flex justify-start">
                    <div className="flex flex-col items-center text-[#401d00]">
                      <p className="flex items-center gap-1">
                        <Image
                          src="/img/common/symbol.svg"
                          alt="quatre Symbol"
                          width={20}
                          height={20}
                        />
                        ビジネス
                      </p>
                      <h2 className="text-6xl montserrat font-bold">
                        Business
                      </h2>
                    </div>
                  </div>
                  <p className="text-[#401d00] font-bold mt-2">
                    Quatre.Incが手掛けるビジネスをご紹介します。
                    <br />
                    私たちは、常に価値を提供することで、
                    <br />
                    人々の笑顔を増やすことに取り組んでいます。
                  </p>
                  <div
                    className={`text-[#401d00] absolute w-full bottom-[10vh] left-0 ${
                      elementsObject.business1?.isVisible
                        ? "opacity-100 translate-y-0 transition-all duration-500"
                        : "opacity-0 translate-y-10 transition-all duration-500"
                    }`}
                  >
                    <p>01.Information Technology</p>
                    <h2 className="text-3xl font-bold mb-5">IT事業</h2>
                    <p>
                      IT事業は、現代社会のイノベーションの先頭を走る分野となっています。日々進化するテクノロジーを活用し、ビジネスや日常生活をより便利かつ効率的にするソリューションを提供します。この分野での取り組みは、社会の持続的な成長を支えるとともに、新しいビジネスチャンスを創出しています。顧客のニーズを正確に捉え、先進技術を組み合わせることで、未来のライフスタイルや業務プロセスを再定義する可能性が広がっています。
                    </p>
                    <div className="mt-5 flex">
                      <LinkButton
                        text={"More"}
                        px={"px-2"}
                        width={"w-[130px]"}
                        color="brown"
                        link=""
                      />
                    </div>
                  </div>
                  <div
                    className={`text-[#401d00] absolute w-full bottom-[10vh] left-0 ${
                      elementsObject.business2?.isVisible
                        ? "opacity-100 translate-y-0 transition-all duration-500"
                        : "opacity-0 translate-y-10 transition-all duration-500"
                    }`}
                  >
                    <p>02.Mergers and Acquisitions</p>
                    <h2 className="text-3xl font-bold mb-5">M&A事業</h2>
                    <p>
                      Quatre.IncのM&A事業は、新しい可能性を追求し、強力なシナジーを生む道を開きます。異なる企業の知識や技術を統合し、共同での成長を実現することが私たちの目標です。M&Aを通じて、持続可能な競争力を築き、業界のリーダーシップを確立し、お客様に更なるサービスと価値を提供いたします。
                    </p>
                    <div className="mt-5 flex">
                      <LinkButton
                        text={"More"}
                        px={"px-2"}
                        width={"w-[130px]"}
                        color="brown"
                        link=""
                      />
                    </div>
                  </div>
                  <div
                    className={`text-[#401d00] absolute w-full bottom-[10vh] left-0 ${
                      elementsObject.business3?.isVisible
                        ? "opacity-100 translate-y-0 transition-all duration-500"
                        : "opacity-0 translate-y-10 transition-all duration-500"
                    }`}
                  >
                    <p>03.Community</p>
                    <h2 className="text-3xl font-bold mb-5">
                      コミュニティ事業
                    </h2>
                    <p>
                      Quatre.Incのコミュニティは、人々を繋ぎ合わせ、共通の価値や目的を共有する場を提供します。
                      私たちのサービスを通じて、日々の生活に笑顔をもたらすことを目指しています。
                      一人ひとりの幸せな瞬間を増やすために、最適なコミュニティとの出会いをサポートします。
                    </p>
                    <div className="mt-5 flex">
                      <LinkButton
                        text={"More"}
                        px={"px-2"}
                        width={"w-[130px]"}
                        color="brown"
                        link=""
                      />
                    </div>
                  </div>
                  <div
                    className={`text-[#401d00] absolute w-full bottom-[10vh] left-0 ${
                      elementsObject.business4?.isVisible
                        ? "opacity-100 translate-y-0 transition-all duration-500"
                        : "opacity-0 translate-y-10 transition-all duration-500"
                    }`}
                  >
                    <p>04.Advertising</p>
                    <h2 className="text-3xl font-bold mb-5">広告代理事業</h2>
                    <p>
                      Quatre.Incは、デジタルからアナログまで、多彩なプロモーションをトータルにサポートします。ホームページの集客、
                      店頭の楽しい企画、即効のリスティング広告、街中の注目の看板、そして心を掴むノベルティの提案。
                      お客様の目と心をキャッチする最適な戦略を展開しております。
                    </p>
                    <div className="mt-5 flex">
                      <LinkButton
                        text={"More"}
                        px={"px-2"}
                        width={"w-[130px]"}
                        color="brown"
                        link=""
                      />
                    </div>
                  </div>
                  <div
                    className={`text-[#401d00] absolute w-full bottom-[10vh] left-0 ${
                      elementsObject.business5?.isVisible
                        ? "opacity-100 translate-y-0 transition-all duration-500"
                        : "opacity-0 translate-y-10 transition-all duration-500"
                    }`}
                  >
                    <p>05.Consulting</p>
                    <h2 className="text-3xl font-bold mb-5">
                      コンサルティング事業
                    </h2>
                    <p>
                      Quatre.Incは、サブスクサービスの革命的な提案から、効果的なウェブ戦略、そして人材育成のサポート
                      までトータルに手がけます。時代のニーズを捉え、ITを最大限活用しながら、事業の成長と継続的な成功を
                      サポートします。事業の拡大、品質の向上、チームの結束により、新しい可能性を追求いたします。
                    </p>
                    <div className="mt-5 flex">
                      <LinkButton
                        text={"More"}
                        px={"px-2"}
                        width={"w-[130px]"}
                        color="brown"
                        link=""
                      />
                    </div>
                  </div>
                  <div
                    className={`text-[#401d00] absolute w-full bottom-[10vh] left-0 ${
                      elementsObject.business6?.isVisible
                        ? "opacity-100 translate-y-0 transition-all duration-500"
                        : "opacity-0 translate-y-10 transition-all duration-500"
                    }`}
                  >
                    <p>06.Social Welfare</p>
                    <h2 className="text-3xl font-bold mb-5">社会福祉事業</h2>
                    <p>
                      高齢者たちに安全かつ快適な生活空間を提供します。日常生活のサポートや医療的ケア、コミュニティ活動
                      への参加などをサポートします。
                      心身の健康を維持し、孤独感を軽減し、質の高い生活を享受するための場として不可欠です。
                      高齢者一人一人のニーズに応じて、多様なサービスやプログラムを展開しております。
                    </p>
                    <div className="mt-5 flex">
                      <LinkButton
                        text={"More"}
                        px={"px-2"}
                        width={"w-[130px]"}
                        color="brown"
                        link=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-80 pb-40 w-6/12">
                <p ref={elementsObject.business1?.ref}>
                  <Image
                    src="/img/top/business-it.jpg"
                    alt="IT事業"
                    width={650}
                    height={750}
                    className="fit"
                  />
                </p>
                <p className="mt-10" ref={elementsObject.business2?.ref}>
                  <Image
                    src="/img/top/business-ma.jpg"
                    alt="M&A事業"
                    width={650}
                    height={750}
                    className="fit"
                  />
                </p>
                <p className="mt-10" ref={elementsObject.business3?.ref}>
                  <Image
                    src="/img/top/business-community.jpg"
                    alt="コミュニティ事業"
                    width={650}
                    height={750}
                    className="fit"
                  />
                </p>
                <p className="mt-10" ref={elementsObject.business4?.ref}>
                  <Image
                    src="/img/top/business-advertising.jpg"
                    alt="広告代理事業"
                    width={650}
                    height={750}
                    className="fit"
                  />
                </p>
                <p className="mt-10" ref={elementsObject.business5?.ref}>
                  <Image
                    src="/img/top/business-consulting.jpg"
                    alt="コンサルティング事業"
                    width={650}
                    height={750}
                    className="fit"
                  />
                </p>
                <p className="mt-10" ref={elementsObject.business6?.ref}>
                  <Image
                    src="/img/top/business-social-welfare.jpg"
                    alt="社会福祉事業"
                    width={650}
                    height={750}
                    className="fit"
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full overflow-x-hidden">
          <div className="relative z-20 mt-[300px] sm:mt-[500px]">
            <Parallax
              bgImage={"/img/top/middle-img.jpg"}
              strength={200}
              bgClassName="object-cover"
              contentClassName="h-full"
              className="w-11/12 h-[80vh] float-right uClearfix"
            ></Parallax>
          </div>
          <div className="absolute bottom-[15vh] text-[#ead2aa] text-[126px] z-30  montserrat font-bold">
            <p
              style={{
                whiteSpace: "nowrap",
                transform: `translateX(${scrollX}px)`,
              }}
            >
              {repeatedText}
            </p>
          </div>
        </section>
        <section>
          <div className="relative z-20 mt-[300px] sm:mt-[500px] bg-[#ead2ab] pb-36 overflow-hidden w-[100vw]">
            <p className="absolute top-[50%] translate-y-[-50%] right-[0] xl:right-0 text-[42vw] leading-none sm:text-[22vw] xl:text-[15vw] font-bold verticalText z-0 text-[#401d00]">
              Quatre.inc
            </p>
            <div className="flex flex-col items-center text-[#401d00] pt-28 pb-10 sm:pb-20">
              <p className="flex items-center gap-1">
                <Image
                  src="/img/common/symbol.svg"
                  alt="quatre Symbol"
                  width={20}
                  height={20}
                />
                マガジン
              </p>
              <h2 className="text-[10vw] sm:text-6xl montserrat font-bold">
                Magazine
              </h2>
            </div>
            <div className="relative">
              <ul
                className={`flex flex-wrap gap-x-[30px] xl:gap-x-[160px] gap-y-36 px-5 sm:px-10 relative z-10 ${styles.magazineList}`}
              >
                <li
                  ref={parallaxEffect}
                  style={{
                    transform: `translateY(${(offsetY - 1000) * 0.2}px)`, // 視差の強度を調整
                  }}
                  className={`relative overflow-hidden ${styles.magazineListItem}`}
                >
                  <a href="">
                    <p className="absolute top-5 left-5 text-white border rounded-lg py-1 px-2 z-20">
                      バッグ
                    </p>
                    <figure>
                      <Image
                        src="/img/top/magazine-img1.jpg"
                        alt=""
                        width={560}
                        height={346}
                        className="fit"
                      />
                      <figcaption>
                        <div className="absolute px-5 bottom-5 text-white z-20">
                          <time dateTime="2023.8.24">2023.8.24</time>
                          <p className="border-t pt-3 mt-3">
                            ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <p className="bg-[rgba(0,0,0,0.4)] w-full h-full absolute top-0 left-0 z-10"></p>
                  </a>
                </li>
                <li
                  ref={parallaxEffect}
                  style={{
                    transform: `translateY(${(offsetY - 1000) * 0.2}px)`, // 視差の強度を調整
                  }}
                  className={`relative overflow-hidden ${styles.magazineListItem}`}
                >
                  <a href="">
                    <p className="absolute top-5 left-5 text-white border rounded-lg py-1 px-2 z-20">
                      車
                    </p>
                    <figure>
                      <Image
                        src="/img/top/magazine-img2.jpg"
                        alt=""
                        width={560}
                        height={346}
                        className="fit"
                      />
                      <figcaption>
                        <div className="absolute px-5 bottom-5 text-white z-20">
                          <time dateTime="2023.8.24">2023.8.24</time>
                          <p className="border-t pt-3 mt-3">
                            ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <p className="bg-[rgba(0,0,0,0.4)] w-full h-full absolute top-0 left-0 z-10"></p>
                  </a>
                </li>
                <li
                  ref={parallaxEffect}
                  style={{
                    transform: `translateY(${(offsetY - 1000) * 0.2}px)`, // 視差の強度を調整
                  }}
                  className={`relative overflow-hidden ${styles.magazineListItem}`}
                >
                  <a href="">
                    <p className="absolute top-5 left-5 text-white border rounded-lg py-1 px-2 z-20">
                      車
                    </p>
                    <figure>
                      <Image
                        src="/img/top/magazine-img3.jpg"
                        alt=""
                        width={560}
                        height={346}
                        className="fit"
                      />
                      <figcaption>
                        <div className="absolute px-5 bottom-5 text-white z-20">
                          <time dateTime="2023.8.24">2023.8.24</time>
                          <p className="border-t pt-3 mt-3">
                            ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                    <p className="bg-[rgba(0,0,0,0.4)] w-full h-full absolute top-0 left-0 z-10"></p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="h-[100vh] relative overflow-hidden">
            <div className="flex items-center absolute bottom-5 sm:bottom-12">
              <div className={`gap-6 ${styles.slideshow}`}>
                <ul className="gap-6">
                  <li>
                    <Image
                      src="/img/top/bottom-img1.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/top/bottom-img2.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/top/bottom-img3.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/top/bottom-img4.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/top/bottom-img5.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                </ul>
                <ul className="gap-6">
                  <li>
                    <Image
                      src="/img/top/bottom-img1.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/top/bottom-img2.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/top/bottom-img3.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/top/bottom-img4.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                  <li>
                    <Image
                      src="/img/top/bottom-img5.jpg"
                      alt="キャトル画像"
                      width={650}
                      height={750}
                      className="fit"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

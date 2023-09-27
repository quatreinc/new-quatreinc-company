import { Layout } from "@/components/Layout";
import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
import React, { use, useCallback, useEffect, useRef } from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const Business = () => {
  const elements = [
    {
      id: "it",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "ma",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "community",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "advertising",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "consulting",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "consultingList",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "socialWelfareWork",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
    {
      id: "attention",
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

  const { elementsObject, offsetY } = useParallax({
    elementsProps: elements,
    textContentProps: undefined,
    parallaxEffect,
  });

  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const elements = elementsRef.current;
    console.log(elements);
    if (elements === null) return;
    const maxHeight = Math.max(
      ...elements.map((element) => element.clientHeight)
    );
    elements.forEach((element) => (element.style.height = `${maxHeight}px`));
  }, []);

  return (
    <Layout
      title="ビジネス | Quatre Inc. | キャトル株式会社"
      description="ビジネスページ。たのしいをもっと身近にたのしいをもっと共有しよう。価値を提供し続け、地球上の笑顔を創造する。 笑顔のリーディングカンパニーを目指す。"
      color="white"
      setRef={elementsObject.last?.ref}
    >
      <div
        className="bg-[#401d00] h-[500px] flex items-center"
        ref={elementsObject.it?.ref}
      >
        <motion.div
          animate={{ opacity: [0, 1], x: [100, 0] }}
          transition={{ duration: 1 }}
          className="text-white lContainerl"
        >
          <p className="montserrat text-6xl font-bold text-[#fff0de]">
            BUSINESS
          </p>
          <h1 className="text-[#fff0de]">ビジネス</h1>
        </motion.div>
      </div>
      <section>
        <div className="bg-[#ead2ab] relative min-h-[95vh] flex items-center">
          <div className="lContainerl flex gap-10 items-center relative">
            <motion.div
              animate={
                elementsObject.it?.hasAnimated
                  ? { opacity: [0, 1], y: [15, 0] }
                  : { opacity: [1, 0], y: [0, 15] }
              }
              transition={{ delay: 0.1, duration: 0.3 }}
              className="montserrat font-bold text-8xl text-[#401d00] absolute top-0 left-[40%] opacity-0"
            >
              <p>01</p>
            </motion.div>
            <div className="w-7/12">
              <div>
                <div className="text-[#401d00]">
                  <motion.div
                    animate={
                      elementsObject.it?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : { opacity: [1, 0], y: [0, 15] }
                    }
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <p>Information Technology</p>
                    <p className="text-4xl font-bold">IT事業</p>
                  </motion.div>
                  <motion.h2
                    animate={
                      elementsObject.it?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : { opacity: [1, 0], y: [0, 15] }
                    }
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="text-2xl font-bold mt-12 mb-4"
                  >
                    新たなビジネスチャンスを開拓する
                    <br />
                    アプリケーションを提供
                  </motion.h2>
                </div>
                <motion.div
                  animate={
                    elementsObject.it?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : { opacity: [1, 0], y: [0, 15] }
                  }
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <p className="mb-6">
                    Webサイトやアプリケーションの制作は、企業やブランドがデジタルな世界でのプレゼンスを確立するための重要なステップです。
                  </p>
                  <p>
                    現代の消費者やビジネスパートナーは、情報を得るため、またサービスや製品を利用するために、Webのプラットフォームを日常的に活用しています。
                    そのため、効果的なWebサイトやアプリケーションは、ブランドの信頼性や利便性を向上させるだけでなく、新しいビジネスチャンスを開拓するキーともなり得ます。
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="w-5/12">
              <motion.div
                animate={
                  elementsObject.it?.hasAnimated
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.9, duration: 0.3 }}
              >
                <Parallax
                  bgImage={"/img/business/it-img.jpg"}
                  strength={200}
                  bgClassName="hW-120pa object-cover"
                  contentClassName="h-[400px]"
                ></Parallax>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-[#f2f2f2] relative min-h-[95vh] flex items-center"
          ref={elementsObject.ma?.ref}
        >
          <div className="lContainerl flex gap-10 items-center">
            <div className="w-7/12 order-2">
              <motion.div
                animate={
                  elementsObject.ma?.hasAnimated
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
                className="montserrat font-bold text-8xl text-[#401d00] absolute top-20 left-10 opacity-0"
              >
                <p>02</p>
              </motion.div>
              <div>
                <div className="text-[#401d00]">
                  <motion.div
                    animate={
                      elementsObject.ma?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : { opacity: [1, 0], y: [0, 15] }
                    }
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <p>Mergers and Acquisitions</p>
                    <p className="text-4xl font-bold">M&A事業</p>
                  </motion.div>
                  <motion.h2
                    animate={
                      elementsObject.ma?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : { opacity: [1, 0], y: [0, 15] }
                    }
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="text-2xl font-bold mt-12 mb-4"
                  >
                    M&Aを円滑な交渉で成功へと導き、
                    <br />
                    締結後も提携コンサルタントが売上拡大をサポートいたします。
                  </motion.h2>
                </div>
                <motion.div
                  animate={
                    elementsObject.ma?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : { opacity: [1, 0], y: [0, 15] }
                  }
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <p className="mb-6">
                    Webサイトやアプリケーションの制作は、企業やブランドがデジタルな世界でのプレゼンスを確立するための重要なステップです。
                  </p>
                  <p>
                    現代の消費者やビジネスパートナーは、情報を得るため、またサービスや製品を利用するために、Webのプラットフォームを日常的に活用しています。
                    そのため、効果的なWebサイトやアプリケーションは、ブランドの信頼性や利便性を向上させるだけでなく、新しいビジネスチャンスを開拓するキーともなり得ます。
                  </p>
                  <Link
                    href=""
                    prefetch={false}
                    className="mt-5 inline-block bg-[#401d00] text-white w-9/12 py-7 text-center relative hover:opacity-80 transition-opacity rounded-full"
                  >
                    社会福祉・医療専門 M&Aシャフクはこちら
                    <p className="absolute top-[50%] translate-y-[-50%] right-5">
                      <Image
                        src="/img/icon/arrow-right-white.svg"
                        alt="矢印"
                        width={19}
                        height={19}
                      ></Image>
                    </p>
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="w-5/12 order-1">
              <div>
                <motion.div
                  animate={
                    elementsObject.ma?.hasAnimated
                      ? { opacity: [0, 1], y: [0, 20] }
                      : { opacity: [1, 0], y: [20, 0] }
                  }
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <Image
                    src="/img/business/ma-img.png"
                    alt="コミュニティ事業"
                    width={619}
                    height={704}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-[#ead2ab] relative min-h-[95vh] flex items-center"
          ref={elementsObject.community?.ref}
        >
          <div className="lContainerl flex gap-10">
            <div className="w-7/12">
              <div>
                <div className="text-[#401d00]">
                  <motion.div
                    animate={
                      elementsObject.community?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : { opacity: [1, 0], y: [0, 15] }
                    }
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <p>Community</p>
                    <p className="text-4xl font-bold">コミュニティ事業</p>
                  </motion.div>
                  <motion.h2
                    animate={
                      elementsObject.community?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : { opacity: [1, 0], y: [0, 15] }
                    }
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="text-2xl font-bold mt-12 mb-4"
                  >
                    コミュニティを収益に換えるビジネスプラットフォーム「Quatre」開発中
                  </motion.h2>
                </div>
                <motion.div
                  animate={
                    elementsObject.community?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : { opacity: [1, 0], y: [0, 15] }
                  }
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <p className="mb-6">
                    デジタル化が進む中で人々の繋がりは希薄になりがちですが、私たちの事業はこの状況を逆手にとり、オンラインとオフラインを組み合わせ、より強固なコミュニティを築くプラットフォームを提供いたします。
                  </p>
                  <p>
                    コミュニティ事業は、ただの集まりを超えて、参加者一人一人が主役となり、共に学び、成長し、価値を創造していく場を提供することを目指しています。
                    新しい時代のコミュニケーションの形を、私たちと一緒に体験しませんか。
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="w-5/12 relative">
              <motion.div
                animate={
                  elementsObject.community?.hasAnimated
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
                className="montserrat font-bold text-8xl text-[#401d00] absolute top-[-8vh] right-0 opacity-0"
              >
                <p>03</p>
              </motion.div>
              <motion.div
                animate={
                  elementsObject.community?.hasAnimated
                    ? { y: [600, -50] }
                    : { y: [-50, 600] }
                }
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                className="absolute bottom-[-190px] right-12 w-[76%] h-[460px] bg-[#ead2ab]"
              >
                <Image
                  src="/img/business/community-img.png"
                  alt="コミュニティ事業"
                  width={619}
                  height={704}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-[#401d00] relative pb-20 px-5"
          ref={elementsObject.advertising?.ref}
        >
          <div className="lContainerl pt-48 pb-32">
            <motion.div
              animate={
                elementsObject.advertising?.hasAnimated
                  ? { opacity: [0, 1], y: [15, 0] }
                  : { opacity: [1, 0], y: [0, 15] }
              }
              transition={{ delay: 0.1, duration: 0.3 }}
              className="montserrat font-bold text-8xl text-white absolute top-20 right-20 opacity-0"
            >
              <p>04</p>
            </motion.div>
            <div className="text-white">
              <motion.div
                animate={
                  elementsObject.advertising?.hasAnimated
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <p>Advertising</p>
                <p className="text-4xl font-bold">広告代理事業</p>
              </motion.div>
              <motion.h2
                animate={
                  elementsObject.advertising?.hasAnimated
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.5, duration: 0.3 }}
                className="text-2xl font-bold mt-12 mb-4"
              >
                デジタル広告から伝統的なメディアまで、
                <br />
                予算や目的に応じた柔軟なプランニングを実現いたします。
              </motion.h2>
            </div>
            <motion.div
              animate={
                elementsObject.advertising?.hasAnimated
                  ? { opacity: [0, 1], y: [15, 0] }
                  : { opacity: [1, 0], y: [0, 15] }
              }
              transition={{ delay: 0.7, duration: 0.3 }}
              className="text-white"
            >
              市場分析からクリエイティブ制作、広告展開までの一連の流れをトータルでサポート。常に変わりゆくトレンドに敏感に反応し、
              <br />
              クライアントのブランドや商品が際立つ戦略を組み立てます。
            </motion.div>
          </div>
          <motion.div
            animate={
              elementsObject.advertising?.hasAnimated
                ? { opacity: [0, 1], y: [15, 0] }
                : { opacity: [1, 0], y: [0, 15] }
            }
            transition={{ delay: 1, duration: 0.3 }}
            className="pb-30"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={2.5} //一度に表示するスライドの数x
              navigation={true} //スライドを前後させるためのボタン、スライドの左右にある
              loop={true}
              spaceBetween={30}
              autoplay={{
                delay: 0,
              }}
            >
              <SwiperSlide className="bg-white py-7 px-10">
                <div ref={(el) => (elementsRef.current[0] = el!)}>
                  <div className="flex justify-center items-center flex-col">
                    <p>
                      <Image
                        src="/img/icon/pc.svg"
                        alt="ウェブプロモーション"
                        width={108}
                        height={95}
                      />
                    </p>
                    <h3 className="text-2xl font-bold text-[#401d00] py-5">
                      ウェブプロモーション
                    </h3>
                  </div>
                  <p>
                    ホームページやSNSページを作っても、お客様に見てもらえなければ・・・。
                    しっかりと、集客から追客までをお手伝いいたします。
                    方法は、リスティング広告だけではありません！ぜひ、一度ご相談ください。
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-white py-7 px-10">
                <div ref={(el) => (elementsRef.current[1] = el!)}>
                  <div className="flex justify-center items-center flex-col">
                    <p>
                      <Image
                        src="/img/icon/shop.svg"
                        alt="プロモーション(店頭販促etc…)"
                        width={108}
                        height={95}
                      />
                    </p>
                    <h3 className="text-2xl font-bold text-[#401d00] py-5">
                      プロモーション(店頭販促etc…)
                    </h3>
                  </div>
                  <p>
                    店頭販促のお手伝いを行います。店頭販促といっても、「POP」だけでなく、人の流れを考えた経路設計から、ノベルティ
                    を利用して、くじ引きやゲームを企画。参加者みんなが「たのしい」と思えるアイディアとモノをご提供いたします。
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-white py-7 px-10">
                <div ref={(el) => (elementsRef.current[2] = el!)}>
                  <div className="flex justify-center items-center flex-col">
                    <p>
                      <Image
                        src="/img/icon/browser-ad.svg"
                        alt="リスティング広告出稿・運用"
                        width={108}
                        height={95}
                      />
                    </p>
                    <h3 className="text-2xl font-bold text-[#401d00] py-5">
                      リスティング広告出稿・運用
                    </h3>
                  </div>
                  <p>
                    まずは即効性のあるリスティング広告のお手伝いをいたします。広告といっても方法は多数あります。
                    お客様のニーズや、サービス、商品によって最適な方法でお手伝いさせていただきます。
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-white py-7 px-10">
                <div ref={(el) => (elementsRef.current[3] = el!)}>
                  <div className="flex justify-center items-center flex-col">
                    <p>
                      <Image
                        src="/img/icon/ad.svg"
                        alt="屋外広告・交通広告"
                        width={108}
                        height={95}
                      />
                    </p>
                    <h3 className="text-2xl font-bold text-[#401d00] py-5">
                      屋外広告・交通広告
                    </h3>
                  </div>
                  <p>
                    屋外の看板はウェブとの連携はとても重要！デジタルを使っていない場所にいる人の目につく看板を使うことで、人々の生活へと
                    浸透します。
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-white py-7 px-10">
                <div ref={(el) => (elementsRef.current[4] = el!)}>
                  <div className="flex justify-center items-center flex-col">
                    <p>
                      <Image
                        src="/img/icon/pc.svg"
                        alt="ウェブプロモーション"
                        width={108}
                        height={95}
                      />
                    </p>
                    <h3 className="text-2xl font-bold text-[#401d00] py-5">
                      ウェブプロモーション
                    </h3>
                  </div>
                  <p>
                    ホームページやSNSページを作っても、お客様に見てもらえなければ・・・。
                    しっかりと、集客から追客までをお手伝いいたします。
                    方法は、リスティング広告だけではありません！ぜひ、一度ご相談ください。
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-white py-7 px-10">
                <div ref={(el) => (elementsRef.current[5] = el!)}>
                  <div className="flex justify-center items-center flex-col">
                    <p>
                      <Image
                        src="/img/icon/printer.svg"
                        alt="印刷物・ノベルティの企画立案"
                        width={108}
                        height={95}
                      />
                    </p>
                    <h3 className="text-2xl font-bold text-[#401d00] py-5">
                      印刷物・ノベルティの企画立案
                    </h3>
                  </div>
                  <p>
                    人々の手に渡る印刷物やノベルティで告知はもちろん、ブランディングも行います。物販用の販促物もお任せください。
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </motion.div>
        </div>
      </section>
      <section>
        <div className="bg-[#f2f2f2]" ref={elementsObject.consulting?.ref}>
          <div className="relative pb-10 px-5">
            <motion.div
              animate={
                elementsObject.consulting?.hasAnimated
                  ? { opacity: [0, 1], y: [15, 0] }
                  : { opacity: [1, 0], y: [0, 15] }
              }
              transition={{ delay: 0.1, duration: 0.3 }}
              className="montserrat font-bold text-8xl text-[#401d00] absolute top-20 left-20 opacity-0"
            >
              <p>05</p>
            </motion.div>
            <div className="lContainerl pt-48 pb-32">
              <div className="text-[#401d00] text-center">
                <motion.div
                  animate={
                    elementsObject.consulting?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : { opacity: [1, 0], y: [0, 15] }
                  }
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <p>Consulting</p>
                  <p className="text-4xl font-bold">コンサルティング事業</p>
                </motion.div>
              </div>
              <div className="w-9/12 mx-auto">
                <motion.h2
                  animate={
                    elementsObject.consulting?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : { opacity: [1, 0], y: [0, 15] }
                  }
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="text-2xl font-bold mt-12 mb-4"
                >
                  <span className="text-left inline-block text-[#401d00]">
                    長期的なビジネスの成長と、
                    <br />
                    持続可能性を追求するためのアプローチを提案
                  </span>
                </motion.h2>
                <motion.div
                  animate={
                    elementsObject.consulting?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : { opacity: [1, 0], y: [0, 15] }
                  }
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  企業や個人の課題解決や成長をサポートするための専門的なサービスを提供するものです。業界のトレンドや最新の方法論に基づき、お客様のニーズに合わせた戦略的なアドバイスを行います。短期的な成功だけでなく、長期的なビジネスの成長と持続可能性を追求するためのアプローチを提案します。
                </motion.div>
              </div>
            </div>
          </div>
          <div className="relative">
            <ul
              className="flex justify-center gap-10 lContainerl absolute z-20 top-[-100px] left-[50%] translate-x-[-50%]"
              ref={elementsObject.consultingList?.ref}
            >
              <motion.li
                className="w-4/12 bg-white p-10"
                animate={
                  elementsObject.consultingList?.hasAnimated
                    ? { opacity: [0, 1], y: [40, 0] }
                    : { opacity: [1, 0], y: [0, 40] }
                }
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="text-center">
                  <p className="inline-block mb-4">
                    <Image
                      src="/img/icon/graph.svg"
                      alt="グラフ"
                      width={79}
                      height={79}
                    />
                  </p>
                  <p className="text-[#37B6F2] text-2xl font-bold mb-5">
                    サブスクリプション構築
                    <br />
                    コンサルティング
                  </p>
                </div>
                <p>
                  近年、ITを活用したサブスクリプションサービスが注目を集めています。従来の月額課金モデルにITツールを組み合わせることで、事業の拡大が期待できます。私たちは、他社とは一線を画するサブスクリプションサービスの企画をご提案いたします。単にサブスクリプションサービスを導入するだけでは十分ではありません。お客様の事業にオンラインコミュニティの形成を組み込み、サブスクリプションの導入を検討することで、新たなビジネスチャンスを創出できるかもしれません。未来のビジネスモデルを構築しましょう。
                </p>
              </motion.li>
              <motion.li
                className="w-4/12 bg-white p-10"
                animate={
                  elementsObject.consultingList?.hasAnimated
                    ? { opacity: [0, 1], y: [40, 0] }
                    : { opacity: [1, 0], y: [0, 40] }
                }
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="text-center">
                  <p className="inline-block mb-4">
                    <Image
                      src="/img/icon/browser-ad.svg"
                      alt="グラフ"
                      width={84}
                      height={79}
                    />
                  </p>
                  <p className="text-[#a5d445] text-2xl font-bold mb-5">
                    ウェブマーケティング
                    <br />
                    集客コンサルティング
                  </p>
                </div>
                <p>
                  ホームページやSNSアカウントの作成は、ビジネスの第一歩に過ぎません。それらを適切に運用・管理しなければ、その効果は半減してしまいます。情報収集から質の高いコンテンツ作成、サイトの成長支援まで、一緒に取り組みましょう！アクセス解析やサイト解析を通じて、効果的な施策の計画と実行をお手伝いします。集客だけでなく、リピート顧客獲得に向けた戦略もご相談ください。効果的なオンラインプレゼンス構築のために、お客様と協力し合いながら進めて参ります。
                </p>
              </motion.li>
              <motion.li
                className="w-4/12 bg-white p-10"
                animate={
                  elementsObject.consultingList?.hasAnimated
                    ? { opacity: [0, 1], y: [40, 0] }
                    : { opacity: [1, 0], y: [0, 40] }
                }
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className="text-center">
                  <p className="inline-block mb-4">
                    <Image
                      src="/img/icon/users.svg"
                      alt="グラフ"
                      width={124}
                      height={76}
                    />
                  </p>
                  <p className="text-[#f4a953] text-2xl font-bold mb-14">
                    人材育成コンサルティング
                  </p>
                </div>
                <p>
                  企業において、人材の育成は絶えず取り組むべき課題です。全ての社員を一律に扱うのではなく、それぞれの役職やレベルに応じて、個別に育成プログラムを提供いたします。最初の一歩は、企業理念の深い理解から始まります。これにより、従業員一人一人が企業の価値や目標に共鳴し、自己成長とともに企業の発展に寄与できるよう支援させていただきます。
                </p>
              </motion.li>
            </ul>
            <motion.div
              animate={
                elementsObject.consultingList?.hasAnimated
                  ? { opacity: [0, 1], y: [40, 0] }
                  : { opacity: [1, 0], y: [0, 40] }
              }
              transition={{ delay: 0, duration: 0.6 }}
            >
              <Parallax
                bgImage={"/img/business/consulting-img.jpg"}
                strength={200}
                bgClassName="object-cover"
                contentClassName="h-[90vh] max-h-[500px] w-full"
              ></Parallax>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-[#401d00] relative min-h-[95vh] flex items-center"
          ref={elementsObject.socialWelfareWork?.ref}
        >
          <div className="lContainerl flex gap-10 items-center relative">
            <div className="w-7/12">
              <div>
                <div className="text-white">
                  <motion.div
                    animate={
                      elementsObject.socialWelfareWork?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : { opacity: [1, 0], y: [0, 15] }
                    }
                    transition={{ delay: 0.3, duration: 0.3 }}
                  >
                    <p>Social Welfare Work</p>
                    <p className="text-4xl font-bold">社会福祉事業</p>
                  </motion.div>
                  <motion.h2
                    animate={
                      elementsObject.socialWelfareWork?.hasAnimated
                        ? { opacity: [0, 1], y: [15, 0] }
                        : { opacity: [1, 0], y: [0, 15] }
                    }
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className="text-2xl font-bold mt-12 mb-4"
                  >
                    デジタル広告から伝統的なメディアまで、
                    <br />
                    予算や目的に応じた柔軟なプランニングを実現いたします。
                  </motion.h2>
                </div>
                <motion.div
                  animate={
                    elementsObject.socialWelfareWork?.hasAnimated
                      ? { opacity: [0, 1], y: [15, 0] }
                      : { opacity: [1, 0], y: [0, 15] }
                  }
                  transition={{ delay: 0.7, duration: 0.3 }}
                  className="text-white"
                >
                  <p className="mb-6">
                    Webサイトやアプリケーションの制作は、企業やブランドがデジタルな世界でのプレゼンスを確立するための重要なステップです。
                  </p>
                  <p>
                    現代の消費者やビジネスパートナーは、情報を得るため、またサービスや製品を利用するために、Webのプラットフォームを日常的に活用しています。
                    そのため、効果的なWebサイトやアプリケーションは、ブランドの信頼性や利便性を向上させるだけでなく、新しいビジネスチャンスを開拓するキーともなり得ます。
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="w-5/12">
              <div
                ref={parallaxEffect}
                style={{
                  transform: `translateY(${offsetY * 0.2}px)`, // 視差の強度を調整
                }}
              >
                <p className="w-10/12 ml-20">
                  <Image
                    src="/img/business/advertising-img1.jpg"
                    alt="社会福祉事業画像１"
                    width={604}
                    height={473}
                  />
                </p>
              </div>
              <div
                ref={parallaxEffect}
                style={{
                  transform: `translateY(${offsetY * 0.3}px)`, // 視差の強度を調整
                }}
              >
                <p>
                  <Image
                    src="/img/business/advertising-img2.jpg"
                    alt="社会福祉事業画像１"
                    width={446}
                    height={335}
                  />
                </p>
              </div>
              <motion.div
                animate={
                  elementsObject.socialWelfareWork?.hasAnimated
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
                className="montserrat font-bold text-8xl text-white absolute bottom-[3vh] left-0 opacity-0"
              >
                <p>06</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="h-[95vh] flex justify-center items-center w-full"
          ref={elementsObject.attention?.ref}
        >
          <div>
            <h2 className="text-[#401d00] text-[8vw] yuGothic font-bold leading-tight">
              <motion.span
                animate={
                  elementsObject.attention?.hasAnimated && {
                    opacity: [0, 1],
                    y: [15, 0],
                  }
                }
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block opacity-0"
              >
                たのしい
              </motion.span>
              <motion.span
                animate={
                  elementsObject.attention?.hasAnimated && {
                    opacity: [0, 1],
                    y: [15, 0],
                  }
                }
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-[3vw] inline-block opacity-0"
              >
                を
              </motion.span>
              <motion.span
                animate={
                  elementsObject.attention?.hasAnimated && {
                    opacity: [0, 1],
                    y: [15, 0],
                  }
                }
                transition={{ delay: 1, duration: 0.5 }}
                className="inline-block opacity-0"
              >
                もっと身近
              </motion.span>
              <motion.span
                animate={
                  elementsObject.attention?.hasAnimated && {
                    opacity: [0, 1],
                    y: [15, 0],
                  }
                }
                transition={{ delay: 1.4, duration: 0.5 }}
                className="text-[3vw] inline-block opacity-0"
              >
                に
              </motion.span>
              <br />
              <motion.span
                animate={
                  elementsObject.attention?.hasAnimated && {
                    opacity: [0, 1],
                    y: [15, 0],
                  }
                }
                transition={{ delay: 1.8, duration: 0.5 }}
                className="inline-block opacity-0"
              >
                たのしい
              </motion.span>
              <motion.span
                animate={
                  elementsObject.attention?.hasAnimated && {
                    opacity: [0, 1],
                    y: [15, 0],
                  }
                }
                transition={{ delay: 2.2, duration: 0.5 }}
                className="text-[3vw] inline-block opacity-0"
              >
                を
              </motion.span>
              <motion.span
                animate={
                  elementsObject.attention?.hasAnimated && {
                    opacity: [0, 1],
                    y: [15, 0],
                  }
                }
                transition={{ delay: 2.6, duration: 0.5 }}
                className="inline-block opacity-0"
              >
                もっと共有
              </motion.span>
              <motion.span
                animate={
                  elementsObject.attention?.hasAnimated && {
                    opacity: [0, 1],
                    y: [15, 0],
                  }
                }
                transition={{ delay: 3, duration: 0.5 }}
                className="text-[3vw] inline-block opacity-0"
              >
                しよう
              </motion.span>
            </h2>
            <motion.p
              animate={
                elementsObject.attention?.hasAnimated && {
                  opacity: [0, 1],
                  y: [15, 0],
                }
              }
              transition={{ delay: 3.4, duration: 0.5 }}
              className="text-[#401d00] opacity-0"
            >
              Bring fun closer.
              <br />
              Let’s share more fun.
            </motion.p>
            <motion.div
              animate={
                elementsObject.attention?.hasAnimated && {
                  opacity: [0, 1],
                  y: [15, 0],
                }
              }
              transition={{ delay: 3.8, duration: 0.5 }}
              className="text-center mt-5"
            >
              <Link
                href=""
                prefetch={false}
                className="mt-5 inline-block bg-[#401d00] text-white w-6/12 py-10 relative hover:opacity-80 transition-opacity rounded-full"
              >
                お問い合わせはこちら
                <p className="absolute top-[50%] translate-y-[-50%] right-5">
                  <Image
                    src="/img/icon/arrow-right-white.svg"
                    alt="矢印"
                    width={19}
                    height={19}
                  ></Image>
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Business;

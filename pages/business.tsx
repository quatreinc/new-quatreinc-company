import { Layout } from "@/components/Layout";
import { useParallax } from "@/hooks/useParallax";
import Image from "next/image";
import React, { useRef } from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

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
      id: "last",
      isVisible: false,
      ref: useRef(null),
      hasAnimated: false,
    },
  ];
  const { elementsObject } = useParallax({
    elementsProps: elements,
    textContentProps: undefined,
  });
  return (
    <Layout
      title="ビジネス | Quatre Inc. | キャトル株式会社"
      description="ビジネスページ。たのしいをもっと身近にたのしいをもっと共有しよう。価値を提供し続け、地球上の笑顔を創造する。 笑顔のリーディングカンパニーを目指す。"
      color="white"
      setRef={elementsObject.last?.ref}
    >
      <div className="bg-[#401d00] h-96 flex items-center">
        <div className="text-white lContainerl">
          <p className="montserrat text-6xl font-bold text-[#fff0de]">
            BUSINESS
          </p>
          <h1 className="text-[#fff0de]">ビジネス</h1>
        </div>
      </div>
      <section>
        <div className="bg-[#ead2ab] relative" ref={elementsObject.it?.ref}>
          <div className="lContainerl pt-48 pb-32 flex gap-10">
            <div className="w-6/12">
              <motion.div
                animate={
                  elementsObject.it?.isVisible
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
                className="montserrat font-bold text-7xl text-[#401d00] absolute top-20 right-20 opacity-0"
              >
                <p>01</p>
              </motion.div>
              <div>
                <div className="text-[#401d00]">
                  <motion.div
                    animate={
                      elementsObject.it?.isVisible
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
                      elementsObject.it?.isVisible
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
                    elementsObject.it?.isVisible
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
            <div className="w-6/12">
              <div>
                <Parallax
                  bgImage={"/img/business/it-img.jpg"}
                  strength={200}
                  bgClassName="hW-120pa object-cover"
                  contentClassName="h-[400px]"
                ></Parallax>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#f2f2f2] relative" ref={elementsObject.ma?.ref}>
          <div className="lContainerl pt-48 pb-32 flex gap-10">
            <div className="w-6/12 order-2">
              <motion.div
                animate={
                  elementsObject.ma?.isVisible
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
                className="montserrat font-bold text-7xl text-[#401d00] absolute top-20 left-20 opacity-0"
              >
                <p>02</p>
              </motion.div>
              <div>
                <div className="text-[#401d00]">
                  <motion.div
                    animate={
                      elementsObject.ma?.isVisible
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
                      elementsObject.ma?.isVisible
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
                    elementsObject.ma?.isVisible
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
            <div className="w-6/12 order-1">
              <div>
                <Parallax
                  bgImage={"/img/business/ma-img.png"}
                  strength={200}
                  bgClassName="object-cover"
                  contentClassName="h-[400px]"
                ></Parallax>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="bg-[#ead2ab] relative"
          ref={elementsObject.community?.ref}
        >
          <div className="lContainerl pt-48 pb-32 flex gap-10">
            <div className="w-6/12">
              <motion.div
                animate={
                  elementsObject.community?.isVisible
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
                className="montserrat font-bold text-7xl text-[#401d00] absolute top-20 right-20 opacity-0"
              >
                <p>01</p>
              </motion.div>
              <div>
                <div className="text-[#401d00]">
                  <motion.div
                    animate={
                      elementsObject.community?.isVisible
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
                      elementsObject.community?.isVisible
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
                    elementsObject.community?.isVisible
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
            <div className="w-6/12 relative">
              <motion.div
                animate={
                  elementsObject.community?.isVisible
                    ? { y: [30, 0] }
                    : { y: [0, 30] }
                }
                transition={{ delay: 1, duration: 0.3 }}
                className="absolute bottom-[-190px] right-0 w-[76%] h-[460px] bg-[#ead2ab]"
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
        <div className="bg-[#401d00] relative" ref={elementsObject.it?.ref}>
          <div className="lContainerl pt-48 pb-32 flex gap-10">
            <div className="w-6/12">
              <motion.div
                animate={
                  elementsObject.it?.isVisible
                    ? { opacity: [0, 1], y: [15, 0] }
                    : { opacity: [1, 0], y: [0, 15] }
                }
                transition={{ delay: 0.1, duration: 0.3 }}
                className="montserrat font-bold text-7xl text-[#401d00] absolute top-20 right-20 opacity-0"
              >
                <p>01</p>
              </motion.div>
              <div>
                <div className="text-[#401d00]">
                  <motion.div
                    animate={
                      elementsObject.it?.isVisible
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
                      elementsObject.it?.isVisible
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
                    elementsObject.it?.isVisible
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
            <div className="w-6/12">
              <div>
                <Parallax
                  bgImage={"/img/business/it-img.jpg"}
                  strength={200}
                  bgClassName="hW-120pa object-cover"
                  contentClassName="h-[400px]"
                ></Parallax>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Business;

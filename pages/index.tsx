import { Layout } from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Layout
        title="Quatre Inc. | キャトル株式会社"
        description="たのしいをもっと身近にたのしいをもっと共有しよう。価値を提供し続け、地球上の笑顔を創造する。 笑顔のリーディングカンパニーを目指す。"
        color="white"
      >
        <div className="h-[100vh] brownBgColor flex justify-center items-center fixed w-full z-0 top-0 left-0">
          <div>
            <h2
              className={`text-white text-[6vw] ${styles.yuGothic} font-bold leading-tight`}
            >
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
        <div className="h-[80vh]"></div>
        <div className="relative z-10 w-1/2 float-right mr-10">
          <Image
            src="/img/top/attention-img1.jpg"
            alt="社会福祉・医療専門M&Aシャフク"
            width={886}
            height={986}
          />
        </div>
      </Layout>
    </>
  );
}

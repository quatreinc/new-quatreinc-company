import { Layout } from "@/components/Layout";
import { useParallax } from "@/hooks/useParallax";
import React, { useRef } from "react";

export const Business = () => {
  const elements = [
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
      <div>aaaa</div>
    </Layout>
  );
};

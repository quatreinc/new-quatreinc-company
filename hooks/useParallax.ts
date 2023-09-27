import { MutableRefObject, useEffect, useMemo, useRef, useState } from "react";

type ElementProps = {
  id: string;
  isVisible: boolean;
  ref: MutableRefObject<null>;
  hasAnimated: boolean;
};

export const useParallax = ({
  elementsProps,
  textContentProps,
  parallaxEffect,
}: {
  elementsProps: ElementProps[];
  textContentProps: string | undefined;
  parallaxEffect: MutableRefObject<HTMLLIElement | HTMLDivElement | null>;
}) => {
  const [repeatedText, setRepeatedText] = useState("");
  const [elements, setElements] = useState(elementsProps);
  const [offsetY, setOffsetY] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  // elementsのidをキーとするオブジェクトを生成
  const elementsObject = useMemo(() => {
    return elements.reduce<Record<string, ElementProps>>((acc, element) => {
      acc[element.id] = element;
      return acc;
    }, {} as Record<string, ElementProps>);
  }, [elements]);

  // スクロール時のパララックス効果のYオフセットハンドリング
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxEffect.current) {
        const rect = parallaxEffect.current.getBoundingClientRect();
        setOffsetY(rect.top);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // スクロール時のパララックス効果のXオフセットハンドリング
  useEffect(() => {
    if (textContentProps) {
      const handleScroll = () => {
        setRepeatedText(textContentProps.repeat(50));
        const moveAmount = window.scrollY % (textContentProps.length * 126);
        setScrollX(-moveAmount);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // インターセクションオブザーバーを使用し、要素がビューポート内に入った際のハンドリング
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newElements = [...elements];
        entries.forEach((entry) => {
          const element = newElements.find(
            (e) => e.ref.current === entry.target
          );
          if (element) {
            element.isVisible =
              entry.isIntersecting && entry.intersectionRatio >= 0.5;

            if (element.isVisible && !element.hasAnimated) {
              element.hasAnimated = true;
            }
          }
        });
        setElements(newElements);
      },
      {
        threshold: [0.25, 0.5, 0.75],
      }
    );

    elements.forEach((element) => {
      if (element.ref.current) {
        observer.observe(element.ref.current);
      }
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { elementsObject, parallaxEffect, offsetY, scrollX, repeatedText };
};

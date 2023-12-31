import Lenis from "@studio-freight/lenis";
import { FC, useEffect, useRef, useState } from "react";

type SmoothScrollOptions = {
  gestureOrientation: "vertical" | "horizontal";
};

const useSmoothScroll = (options: SmoothScrollOptions) => {
  const [lenis, setLenis] = useState<Lenis | null>();
  const reqIdRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  useEffect(() => {
    const animate = (time: DOMHighResTimeStamp) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current as number);
  }, [lenis]);

  useEffect(() => {
    // インスタンスを生成
    const lenis = new Lenis({
      duration: 1.2, // アニメーションの継続時間
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 特定の値の変化率を指定
      orientation: options.gestureOrientation, // 方向
      gestureOrientation: options.gestureOrientation,
      smoothWheel: true, // スムーススクロールの有効・無効を設定
      smoothTouch: false, // タッチスクロール時のスムーススクロールの有効・無効を設定。(タッチデバイス本来の滑らかさを模倣することは不可能であるため、デフォルト無効)
      touchMultiplier: 2,
    });
    setLenis(lenis);

    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, [options.gestureOrientation]);
};

export default useSmoothScroll;

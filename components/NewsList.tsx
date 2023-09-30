import { FC, useCallback, useState } from "react";

type Props = {
  buttonBorderColor: string;
  currentColor: string;
  notCurrentColor: string;
  lineColor: string;
};

export const NewsList: FC<Props> = ({
  buttonBorderColor,
  currentColor,
  notCurrentColor,
  lineColor,
}) => {
  const [activeTab, setActiveTab] = useState("全て");

  const handleTagClick = useCallback((target: string) => {
    setActiveTab(target);
  }, []);

  return (
    <div>
      <ul className={`flex flex-wrap gap-5 pb-7 border-b ${lineColor}`}>
        <li>
          <button
            onClick={() => handleTagClick("全て")}
            className={`inline-block border ${buttonBorderColor} py-1 px-6 rounded-full transition-colors duration-300 ${
              activeTab === "全て" ? currentColor : notCurrentColor
            }`}
          >
            全て
          </button>
        </li>
        <li>
          <button
            onClick={() => handleTagClick("お知らせ")}
            className={`inline-block border ${buttonBorderColor} py-1 px-6 rounded-full transition-colors duration-300 ${
              activeTab === "お知らせ" ? currentColor : notCurrentColor
            }`}
          >
            お知らせ
          </button>
        </li>
      </ul>
      <ul>
        <li
          className={`border-b ${lineColor} py-7 flex gap-2 sm:gap-5 flex-col sm:flex-row`}
        >
          <time dateTime="2023.8.24">2023.8.24</time>
          <p>
            価値を提供し続け、地球上の笑顔を創造する。価値を提供し続け、地球上の笑顔を創造する。価値を提供し続け、地球上の笑顔を価値
            を提供し続け、地球上の笑顔を創造する。価値を提供し続け、地球上の笑顔を創造する。創造する。
          </p>
        </li>
        <li
          className={`border-b ${lineColor} py-7 flex gap-2 sm:gap-5 flex-col sm:flex-row`}
        >
          <time dateTime="2023.8.24">2023.8.24</time>
          <p>
            価値を提供し続け、地球上の笑顔を創造する。価値を提供し続け、地球上の笑顔を創造する。
          </p>
        </li>
        <li
          className={`border-b ${lineColor} py-7 flex gap-2 sm:gap-5 flex-col sm:flex-row`}
        >
          <time dateTime="2023.8.24">2023.8.24</time>
          <p>
            価値を提供し続け、地球上の笑顔を創造する。価値を提供し続け、地球上の笑顔を創造する。
          </p>
        </li>
        <li
          className={`border-b ${lineColor} py-7 flex gap-2 sm:gap-5 flex-col sm:flex-row`}
        >
          <time dateTime="2023.8.24">2023.8.24</time>
          <p>
            価値を提供し続け、地球上の笑顔を創造する。価値を提供し続け、地球上の笑顔を創造する。
          </p>
        </li>
      </ul>
    </div>
  );
};

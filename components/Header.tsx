import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

type Props = {
  color: "brown" | "white";
};

export const Header: FC<Props> = ({ color = "brown" }) => {
  const router = useRouter();

  const navigationList = [
    { name: "TOP", href: "/", current: true },
    { name: "BUSINESS", href: "/business", current: false },
    { name: "NEWS", href: "/news", current: false },
    { name: "MAGAZINE", href: "/magazine", current: false },
    { name: "ABOUT", href: "/about", current: false },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#401d00]" : ""
      }`}
    >
      <header className="flex justify-between items-center max-w-screen-2xl px-10 py-5 mx-auto">
        {router.pathname === "/" ? (
          <h1>
            <Image
              src="/img/common/logo.svg"
              alt="Quatre.inc"
              width={135}
              height={43}
            />
          </h1>
        ) : (
          <p>
            <Image
              src="/img/common/logo-brown.svg"
              alt="Quatre.inc"
              width={135}
              height={43}
            />
          </p>
        )}
        <ul className="flex gap-5 items-center">
          {navigationList.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                prefetch={false}
                className={`
                  ${
                    item.current
                      ? color === "brown"
                        ? "brownBorderBottomColor"
                        : "text-white border-b border-b-white"
                      : color === "brown"
                      ? "brownTextColor"
                      : "text-white"
                  }
                    hover:opacity-70 transition-opacity duration-300
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`${
                color === "brown"
                  ? "brownBgColor text-white"
                  : "bg-white brownTextColor"
              } py-2 px-4 flex items-center gap-2 rounded-full`}
            >
              <Image
                src={
                  color === "brown"
                    ? "img/icon/mail-white.svg"
                    : "img/icon/mail-brown.svg"
                }
                alt="mail"
                width={19}
                height={13}
              />
              <span>CONTACT</span>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

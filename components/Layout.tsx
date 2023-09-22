import Head from "next/head";
import React, { FC, MutableRefObject } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = {
  title: string;
  description: string;
  color: "brown" | "white";
  children: React.ReactNode;
  setRef?: MutableRefObject<null>;
};

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <Header color={props.color} />
      <main>{props.children}</main>
      <Footer setRef={props.setRef} />
    </>
  );
};

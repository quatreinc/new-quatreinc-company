import Head from "next/head";
import React, { FC } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type Props = {
  title: string;
  description: string;
  color: "brown" | "white";
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ title, description, color, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header color={color} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

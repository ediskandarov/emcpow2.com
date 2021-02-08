import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title: string;
  description: string;
};

const Layout = ({ children, description, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%22100%22>🛠</text></svg>"
      />
    </Head>
    <div className="h-2 bg-yellow-600" />
    <div className="container mx-auto sm:max-w-screen-md">{children}</div>
  </div>
);

export default Layout;

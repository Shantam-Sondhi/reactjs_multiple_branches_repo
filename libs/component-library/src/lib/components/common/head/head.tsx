import React from "react";
import NextHead from "next/head";

interface Props {
  children?: JSX.Element | JSX.Element[];
  title: string |string[];
}

export const Head = (props: Props) => {
  const { children, title } = props;

  return (
    <NextHead>
      <title>TESTING - {title}</title>
      {children}
    </NextHead>
  );
};

export default Head;
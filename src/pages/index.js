import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Index = () => {
  return (
    <Layout title="home">
      <h1 className="font-bold text-2xl">welcome to my Gatsby site!</h1>
      <p>i'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        alt="the greatest of all time - pikachu"
        src="https://image.pngaaa.com/920/188920-middle.png"
        width={200}
        height={200}
        className="mt-4"
      />
    </Layout>
  );
};

export const Head = () => <title>home</title>;

export default Index;

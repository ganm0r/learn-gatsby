import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/layout";

const About = () => (
  <Layout title="about">
    <h1 className="font-bold text-2xl">this is about me!</h1>
    <p>about me this is, totally and completely, no doubts</p>
  </Layout>
);

export const Head = () => <title>about</title>;

export default About;

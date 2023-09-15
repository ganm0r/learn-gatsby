import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

const Layout = ({ title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="min-h-screen">
      <nav className="flex gap-4 p-4 underline text-blue-600">
        <h1 className="font-bold !no-underline">
          {data.site.siteMetadata.title}
        </h1>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
      </nav>
      <main className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl">{title}</h1>
        {children}
      </main>
    </div>
  );
};

export { Layout };

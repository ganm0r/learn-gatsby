import React from "react";
import { Link } from "gatsby";

const Layout = ({ title, children }) => (
  <div className="min-h-screen">
    <nav className="flex gap-4 p-4 underline text-blue-600">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </nav>
    <main className="flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl">{title}</h1>
      {children}
    </main>
  </div>
);

export { Layout };

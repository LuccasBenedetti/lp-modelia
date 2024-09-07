import React from "react";
import { Header } from "../components/header";
import { Hero } from "../containers/hero";

export const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Header />
      <Hero />
    </div>
  );
};

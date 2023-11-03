import React from "react";
import { Slider } from "./Slider";
import { Categories } from "./Categories";
import { News } from "./News";
import { Trending } from "./Trending";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <Trending />
      <News />
      <Footer />
    </>
  );
};

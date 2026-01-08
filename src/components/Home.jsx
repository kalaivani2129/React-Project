import React, { useState } from "react";
import Banner from "../components/Banner";
import MenuCategories from "./MenuCategories";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Banner category={category} />
      <MenuCategories setCategory={setCategory} />
    </>
  );
};

export default Home;

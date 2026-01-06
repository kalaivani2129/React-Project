import React, { useState } from "react";
import Banner from "../Components/Banner";
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

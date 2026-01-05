
import React, { useState } from "react";
import MenuCategories from "./MenuCategories";
import Banner from "./Banner";
import CategoryPosts from "./CategoryPosts";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      
      <Banner category={category} />

      <MenuCategories setCategory={setCategory} />

     
      <CategoryPosts category={category} />
    </>
  );
};

export default Home;




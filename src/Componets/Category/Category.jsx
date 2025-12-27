import React from "react";
import categoryInfo from "./categoryFullInfos"; // Importing an array containing category information
import CategoryCard from "./CategoryCard"; // Importing the CategoryCard component to render individual categories

import classes from "./Category.module.css"; // Importing CSS module for custom styles specific to the Category component

// Function component that renders a list of categories using the CategoryCard component
function Category() {
  return (
    <>
      {/* Container for the category section */}
      <section className={classes.category__container}>
        {/* Looping over categoryInfos array and rendering CategoryCard for each item */}
        {categoryInfo.map((infos, index) => {
          return <CategoryCard key={index} data={infos} />; // Passing category data as props to CategoryCard and `key` for list rendering performance
        })}
      </section>
    </>
  );
}

export default Category; // Exporting the Category component for use in other parts of the application

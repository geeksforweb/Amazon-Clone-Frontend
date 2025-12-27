import React from "react";
import classes from "./Category.module.css"; // Importing CSS module for custom styles specific to the CategoryCard component
import { Link } from "react-router-dom"; // Importing Link component to navigate between routes

// Functional component that renders an individual category card
function CategoryCard({ data }) {
  // console.log(data); //title: 'Discover fashion trends', name: "women's clothing", imgLink: 'https://m.media-amazon.com/images/I/71OwY2iKTGL._AC_UL480_FMwebp_QL65_.jpg'
  return (
    <div className={classes.category}>
      {/* Link to the results page for the selected category */}
      <Link to={`/category/${data?.name}`}>
        <span>
          {/* Rendering the title of the category */}
          <h2>{data?.title}</h2>
        </span>
        {/* Rendering the category image */}
        <img src={data?.imgLink} alt={data?.title} />
        {/* 'Shop now' prompt below the image */}
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryCard; // Exporting the component for use in other parts of the application

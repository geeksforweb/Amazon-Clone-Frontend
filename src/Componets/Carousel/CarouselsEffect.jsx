import React from "react";
import { Carousel } from "react-responsive-carousel"; // Importing a carousel component from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importing the default styles for the carousel
// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // Commented out unused icon imports
import classes from "./Carousel.module.css"; // Importing CSS module for styling the carousel
import { imgs } from "./imgs/data"; // Importing an array of image links

// Function component that implements a carousel with custom left and right arrows
function CarouselsEffect() {
  return (
    <>
      {/* Carousel Component */}
      <Carousel
        autoPlay={true} // Enables auto-playing of images
        infiniteLoop={true} // Enables continuous looping through images
        showIndicators={false} // Hides the small indicator dots under the carousel
        showThumbs={false} // Hides the thumbnail previews of the images
        showStatus={false} // Hides the status information (like image number)
      >
        {/* Loop through images and render them inside the carousel */}
        {imgs.map((imageItemsLinks, i) => {
          return <img key={i} src={imageItemsLinks} alt={`carousel-${i}`} />; // Renders each image in the carousel
        })}
      </Carousel>

      {/* Placeholder for additional styling/content */}
      {/*  visual overlay—specifically a "fade-out" or "gradient transition"—at the bottom of a hero image.  */}
      <div className={classes.hero__img}></div>
    </>
  );
}

export default CarouselsEffect; // Export the component for use in other parts of the application

import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { useContext } from "react";
import { Type } from "../../Utility/action.type";

function ProductCard({
  product, // Object containing product details
  flex, // Optional flag for rendering layout as flex
  renderDesc,
  renderAdd
}) {
  // ✅ GUARD: stop rendering if product is null or undefined
  if (!product) {
    return null; // or loading UI
  }

  //  Safe destructuring
  const { id, image, title, rating, price, description } = product;

  // Accessing global state and dispatch function from DataContext
  const [state, dispatch] = useContext(DataContext);
  console.log(state);

  // Function to add the product to the cart
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET, // Dispatching an action to add the item to the basket
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };




  return (
    <div
      className={`${classes.productCard__container} ${
        flex ? classes.product_detail : "" // Conditionally adding a class for layout adjustment
      }`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title}
          className={classes.productCard__img__container}
        />
      </Link>

      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.productCard__rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>{rating?.count || 0}</small>
        </div>

        <div className={classes.productCard__price}>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={classes.productCard__button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

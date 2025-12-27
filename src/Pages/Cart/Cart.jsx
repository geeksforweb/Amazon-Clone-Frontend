import React, { useContext } from "react";
import LayOut from "../../Componets/Layout/Layout";
import { DataContext } from "../../Componets/DataProvider/DataProvider";
import ProductCard from "../../Componets/Product/ProductCard";
import CurrencyFormat from "../../Componets/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../Utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  // Calculates total price by iterating through the basket
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount; // Total = item price * amount + existing total
  }, 0);

  // Function to increase item quantity
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  // Function to decrease item quantity
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.cart__container}>
        <div className={classes.cart__card}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />
          {/* Checks if basket is empty or displays mapped items */}
          {basket?.length === 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => (
              <section key={i} className={classes.cart__product}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.cart__btn__container}>
                  <button
                    className={classes.cart__btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.cart__btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {/* Displays subtotal section only if basket is not empty */}
        {basket?.length !== 0 && (
          <div className={classes.cart__subtotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;

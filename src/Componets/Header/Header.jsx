// import logo from "../../assets/icons/amazon-logo-white.png";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom"; // Importing React Router components for routing
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import { auth } from "../../Utility/FireBAse";


function Header() {
  // Accessing the basket (cart items) and user from the context
  const [{ basket, user }, dispatch] = useContext(DataContext);

  // // Calculate total items in the basket (cart) using reduce
  // const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  const totalItem = basket.length;

  return (
    <section className={classes.header__outerContainer}>
      <header>
        {/* === TOP HEADER SECTION (Dark Blue) === */}
        <section className={classes.header__container}>
          {/* 1. Logo and Delivery Location */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin size={19} />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* 2. Search Bar */}
          <div className={classes.header__search}>
            <select className={classes.header__search_category}>
              <option value="">All</option>
            </select>
            <div className={classes.header__search_InputContainer}>
              <input type="text" placeholder="Search Amazon" />
            </div>
            {/* Note: size is 33 to fit perfectly inside the 40px height button */}
            <BsSearch className={classes.header__search_icon} size={40} />
          </div>

          {/* 3. Right-side Nav (Account, Orders, Cart) */}
          <div className={classes.order__container}>
            {/* Language */}
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg"
                alt="USA Flag"
              />
              <select>
                <option>EN</option>
              </select>
            </Link>

            {/* Sign In / Account */}

            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            {/* Orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              {/* <span>{totalItem}</span> Placeholder for item count */}
              <span>{totalItem}</span> {/* Display total items in cart */}
            </Link>
          </div>
        </section>
      </header>

      {/* === LOWER HEADER SECTION === */}
      <LowerHeader />
    </section>
  );
}

export default Header;

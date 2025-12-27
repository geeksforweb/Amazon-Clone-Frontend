import React from "react";
import { MdOutlineMenu } from "react-icons/md";
import classes from "./header.module.css"; // Note: Re-using the Header.module.css file

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <MdOutlineMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
    
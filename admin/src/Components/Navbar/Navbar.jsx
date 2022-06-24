import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ManuBar}>
        <h2>Shree Sai Mega Mart</h2>{" "}
        <Link to="/" className="link">
          <li className={`${styles.MenuItems} ${styles.selected}`}>
            <span>Home</span>
          </li>
        </Link>
        <Link to="/addproduct" className="link">
          <li className={styles.MenuItems}>
            <span>Add Product</span>
          </li>
        </Link>
        <Link to="/view" className="link">
          <li className={styles.MenuItems}>
            <span>View Product</span>
          </li>
        </Link>
        <Link to="/login" className="link">
          <div className={styles.submitBtn}>
            <button>Logout</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

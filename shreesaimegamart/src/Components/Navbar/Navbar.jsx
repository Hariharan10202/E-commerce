import React from "react";
import styles from "./Navbar.module.css";

import { BsArrowRight } from "react-icons/bs";

import Image from "../../Images/Header.jpg";

const Navbar = ({ show }) => {
  return (
    <section className={`${show == false ? '' : styles.header}`}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <h2>SHREE SAI MEGAMART</h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#products">PRODUCTS</a>
              </li>
              <li>
                <a href="#footer">ABOUT US</a>
              </li>
              <li>
                <a href="#div3">CONTACT US</a>
              </li>
              <li>
                <span className={styles.loginButton}>Login</span>
              </li>
            </ul>
          </nav>
        </div>
        {(show === true || show === undefined) ? <div className={styles.row}>
          <div className={styles.content}>
            <h1>Make delicious creations Shop with us!</h1>
            <div href="" className={styles.btn}>
              <button>
                Explore Now <BsArrowRight className={styles.icon} />
              </button>
            </div>
          </div>
          <img className={styles.logo} src={Image} />
        </div> : ''}
      </div>
    </section>
  );
};

export default Navbar;

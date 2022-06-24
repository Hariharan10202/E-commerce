import React from "react";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <h1>Login</h1>
        <div className={styles.inputField}>
          <input type="text" placeholder="Email" />
        </div>
        <div className={styles.inputField}>
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.btn}>
          <button>Login</button>
        </div>
        <p>Don't Have Account? Sign in.</p>
      </div>
    </div>
  );
};

export default Login;

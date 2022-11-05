import React from "react";
import aklogo from "../Skill/image/aklogo.jpg"
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div
      className={styles.footerd}>
      <img src={aklogo} alt=""  width="50px" height="auto" />
      <span
        className={styles.copyright}
       
      >
        Copyright © 2022 programmer Ankur Kumar Chauhan. All Rights Reserved.
      </span>
    </div>
  );
}

export default Footer;
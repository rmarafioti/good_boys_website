"use client";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Image from "next/image";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerCtas}>
        <Image
          className={styles.mascot}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860707/Poodle_GoodBoys_va3ted.svg"
          alt="good boys lopgo featuring an illsutarion of a dog with sunglasses"
          width={90}
          height={81}
        />
        <div className={styles.buttonSection}>
          <p className={styles.footerButtonOne}>BOOK NOW</p>
          <p className={styles.footerButton}>CONTACT US</p>
        </div>
      </section>
      <section className={styles.linkSection}>
        <div className={styles.iconSection}>
          <FaFacebook className={styles.icon} />
          <FaLinkedin className={styles.icon} />
          <FaYoutube className={styles.icon} />
          <FaInstagram className={styles.icon} />
        </div>
        <div className={styles.links}>
          <p className={styles.link}>HOME</p>
          <p className={styles.link}>SERVICES</p>
          <p className={styles.link}>FAQ</p>
          <p className={styles.link}>ABOUT</p>
          <p className={styles.link}>STAFF</p>
        </div>
      </section>
    </footer>
  );
}

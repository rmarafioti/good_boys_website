"use client";

import useVisibilityObserver from "../hooks/useVisibilityObserver";
import Image from "next/image";
import { faqs } from "@/app/data/data";

import styles from "@/app/styling/faq.module.css";
import Link from "next/link";

function FaqCard({ question, answer }) {
  const [faqRef, faqRefVisible] = useVisibilityObserver(0.6);

  return (
    <li ref={faqRef} className={styles.faq}>
      <p className={styles.question}>{question}</p>
      <div className={styles.divider}></div>
      <p className={`${styles.answer} ${faqRefVisible ? styles.visible : ""}`}>
        {answer}
      </p>
    </li>
  );
}

export default function Faq() {
  return (
    <main className={`${styles.page} fade-in`}>
      <h1 className={styles.header}>You have questions - we have answers.</h1>
      <p className={styles.subheader}>
        Below are some commonly asked questions by clients:
      </p>
      <Image
        className={styles.faqPhoto}
        src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747398365/poodle_dog_groom_dye_c_crop_ar_16_9_mg9mss.jpg"
        alt="Photo of a freshly groomed dog"
        width={3024}
        height={1701}
        priority
      />
      <Image
        className={styles.faqPhotoMobile}
        src="https://res.cloudinary.com/do4shdwcc/image/upload/v1748573185/IMG_8215_puazk7.jpg"
        alt="Photo of a freshly groomed dog"
        width={2988}
        height={3388}
        priority
      />
      <ul className={styles.faqSection}>
        {faqs.map((faq) => (
          <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
      <section data-scroll-section className={styles.buttonSection}>
        <Link href="/services" className={styles.buttonLink}>
          <button className={styles.button}>Book A Spa Day</button>
        </Link>
      </section>
    </main>
  );
}

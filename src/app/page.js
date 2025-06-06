import Image from "next/image";
import QuoteForm from "./components/QuoteForm";
import { reviews } from "./data/data";
import ScrollToContent from "./components/ScrollToContent";

import styles from "./page.module.css";
import Link from "next/link";

function ReviewCard({ review, name }) {
  return (
    <li className={styles.review}>
      <p className={styles.reviewContent}>&quot;{review}&quot;</p>
      <p className={styles.reviewName}>- {name}</p>
    </li>
  );
}

export default function Home() {
  return (
    <main className={`${styles.page} fade-in`}>
      <ScrollToContent />
      <article>
        <h1 className={styles.header}>
          Your dog called - They want a makeover.
        </h1>
        <p className={styles.subHeader}>Book today for the ultimate spa day.</p>
        <Image
          className={styles.heroPhoto}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333722/resized_b08phu.jpg"
          alt="Photo of a freshly groomed dog"
          width={2972}
          height={1699}
          priority
        />
        <Image
          className={styles.heroPhotoMobile}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1748634985/IMG_0713_gtz66d.jpg"
          alt="Photo of a freshly groomed dog"
          width={3024}
          height={4032}
          priority
        />
        <section data-scroll-section className={styles.section}>
          <div className={styles.groomCopyMobile}>
            <h2 className={styles.sectionHeader}>
              Best-in-class grooms for Chicago dogs.
            </h2>
            <p className={styles.copy}>
              Good boys prioritizes stress-free grooming by operating at a small
              scale. Its simple: dogs get stressed out, just like us. We want to
              keep the vibes mellow and ensure your dog <b>loves</b> their
              groomer.
            </p>
          </div>
          <Image
            className={styles.spaDog}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333191/IMG_6897_aogyjy.jpg"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />
          <Image
            className={styles.spaDog}
            id={styles.spaDogBottom}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333190/IMG_9259_tb4coe.jpg"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />
          <div className={styles.groomCopy}>
            <h2 className={styles.sectionHeader}>
              Best-in-class grooms for Chicago dogs.
            </h2>
            <p className={styles.copy}>
              Good boys prioritizes stress-free grooming by operating at a small
              scale. Its simple: dogs get stressed out, just like us. We want to
              keep the vibes mellow and ensure your dog <b>loves</b> their
              groomer.
            </p>
          </div>
        </section>
        <section data-scroll-section className={styles.section}>
          <div className={styles.spaSection}>
            <h3 className={styles.sectionHeaderTwo}>
              Thorough baths. Shiny coats. Lots of treats.
            </h3>
            <ul className={styles.spaSectionCopy}>
              <li className={styles.copyHeader}>
                We start with a bath and blow dry...
              </li>
              <li className={styles.copyBody}>
                ... using quality products tailored to your dogs skin and coat
                type.
              </li>
              <li className={styles.copyHeader}>
                Then, we move on to a custom groom...
              </li>
              <li className={styles.copyBody}>
                ... taking it at your dogs pace. Sometimes we need to take treat
                breaks, and that&apos;s okay.
              </li>
              <li className={styles.copyHeader}>
                Finally, a nail trim and ear cleaning...
              </li>
              <li className={styles.copyBody} id={styles.copyBodyBottom}>
                ... and once we wrap up, they&apos;re sent home with a seasonal
                bandana. How cute is that?
              </li>
            </ul>
            <Link href="/services">
              <button className={styles.spaDayButton}>Book A Spa Day</button>
            </Link>
          </div>
          <Image
            className={styles.spaDogThree}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333190/IMG_5850_kj7igd.jpg"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />
        </section>
        <section data-scroll-section>
          <QuoteForm />
        </section>
        <section data-scroll-section className={styles.reviewsSection}>
          <h2 className={styles.reviewsHeader}>
            See what our clients are saying about us.
          </h2>
          <ul className={styles.reviewsContainer}>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review.review}
                name={review.name}
              />
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}

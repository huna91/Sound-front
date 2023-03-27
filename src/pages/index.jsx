import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const Landing = () => {
  console.log("INDEX");

  return (
    <>
      <Head>
        <title>Y-Sound</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.landing_wrap}>
          <div className={styles.landing_left}>
            <Image
              src={"/images/landing_img.png"}
              width={900}
              height={900}
            ></Image>
          </div>
          <div className={styles.landing_right}>
            <h1 className={styles.landing_right_title}>
              Find Your Perfect Soundtrack
            </h1>
            <div className={styles.landing_right_subTitle}>
              Discover a Marketplace for Sound Effects and Background Music
            </div>
            <div className={styles.landing_right_contents}>
              Welcome to our website, where you can explore a vast selection of
              high-quality sound effects and background music created by
              talented editors and creators from all around the world. Whether
              you're working on a video, podcast, game, or any other type of
              project, we understand how crucial it is to have the right audio
              to complement your content. That's why we've created a marketplace
              that connects you with skilled sound designers who can provide you
              with the perfect tracks for your needs. With our intuitive
              platform, you can browse and filter tracks by genre, mood, length,
              and other criteria, preview them before purchase, and instantly
              download them in the format of your choice. Join our community
              today and discover the perfect soundtrack to elevate your next
              project!
            </div>
            <button className={styles.landing_right_button}>
              Let's Get it!
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing;

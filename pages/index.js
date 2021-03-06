import Head from "next/head";

import styles from "../styles/Home.module.css";
import Link from "next/link";
import Logo from "~/components/elements/common/Logo";
import { siteName } from "~/constants/siteDetails";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <h1>
          <Logo /> Admin Themplate
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/todos">
            <a className={styles.card}>
              <h2>Dashboard &rarr;</h2>
              <p>With Ant Design</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}

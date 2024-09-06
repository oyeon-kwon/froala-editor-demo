"use client";

import styles from "./page.module.css";

import dynamic from "next/dynamic";

const Editor = dynamic(
  () => {
    return import("./editor");
  },
  { ssr: false }
);

export default function Home() {
  return <div className={styles.page}>{<Editor />}</div>;
}

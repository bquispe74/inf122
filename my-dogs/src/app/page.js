import Image from "next/image";
//import styles from "./page.module.css";
//import Dog from "./components/dogs";

import Main from './components/main';
import './components/style.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <Main/>
    </main>
  );
}
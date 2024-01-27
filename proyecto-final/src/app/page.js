'use client'
import Image from "next/image";

import styles from "./page.module.css";
import Profile from "./components/profile";
import Facts from "./components/facts";
import Boton from "./components/botones";
import Tabs from "./components/tabs";
import Contenedores from "./components/container";



<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export default function Home() {

  return (
    
    <div className={styles.main}>
      <div className="container">

      <Profile />
      <Facts/>
      <Boton/>
      <Tabs/>
      <Contenedores/>
      </div>
          
        
    </div>
      
  );
}
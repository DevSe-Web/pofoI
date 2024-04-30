import { useState } from "react";
import Display from "./components/Display";
import SideBar from "./components/SideBar";
import styles from "./Main.module.css";


export default function Main() {

  const [visiableSideBar, setVisiableSideBar] = useState(false);


  return (
    <div className={styles.body}>
      {visiableSideBar ? <SideBar /> : null }
        <Display />
    </div>
  )
}
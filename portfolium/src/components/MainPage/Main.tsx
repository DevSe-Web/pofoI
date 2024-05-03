import { useState } from "react";
import Display from "../MainDisplay/Display";
import SideBar from "../SideBar/SideBar";
import styles from "./Main.module.css";
import { useOnOffStore } from "../../zustand/onoffStore";


export default function Main() {

  const { status, setStatus } = useOnOffStore();

  return (
    <div className={styles.body}>
      <Display />
      {status ? <SideBar /> : null}
    </div>
  )
}
import TopNavBar from "../TopNavBar/TopNavBar";
import styles from "./Display.module.css";
import Text from "../Welcome/Text";
import Profile from "../ProfileModule/Profile";
import { useState, useEffect } from "react";
import { useOnOffStore } from "../../zustand/onoffStore";



const Display = () => {
  const { status } = useOnOffStore();
  const [viewActive, setViewActive] = useState(false);

  useEffect(() => {
    setViewActive(true)
  }, [])

  return (
    <div className={`${styles.body} ${status && styles.activeSide}`}>
      <div className={styles.background_container}></div>
      <div className={styles.background_blur}></div>
      <div className={styles.view_container}>
        <TopNavBar />
        <div className={styles.view_welcome_text}>
          <Text />
        </div>
        <div className={`${styles.view_profile} ${viewActive && styles.active}`}>
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default Display;
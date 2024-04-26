import TopNavBar from "./TopNavBar";
import styles from "./Display.module.css";
import background_img from "../images/_.gif";



const Display = () => {
  return (
    <div className={styles.body}>
      <div className={styles.background}>
        <TopNavBar />
        <img src={background_img} alt="" className={styles.ls}/>
      </div>

    </div>
  )
}

export default Display;
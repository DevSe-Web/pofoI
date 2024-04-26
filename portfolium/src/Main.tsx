import Display from "./components/Display";
import SideBar from "./components/SideBar";
import styles from "./Main.module.css";


export default function Main() {


    return (
        <div className={styles.body}>
            <SideBar />
            <Display />
        </div>
    )
}
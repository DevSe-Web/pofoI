import styles from './TopNavBar.module.css';
import MotionIcon from '../images/icons8-cd.gif';

const TopNavBar = () => {


  return (
    <div className={styles.body}>

      <ul className={styles.left}>
        {/* 토글 */}
        <li><img className={styles.motionIcon} src={MotionIcon} alt="눈이내려요~" /></li>
        {/* Skill */}
        <li>Skill</li>
        {/* Current Interest */}
        <li>Interest</li>
        {/* Wish */}
        <li>wish</li>
      </ul>

      {/* Logo - Center */}
      <div className={styles.center}>
        <span className="Pofo">pofo</span><span className="I">I</span>
      </div>

      {/* Questioins? */}
      <div className={styles.right}>
        <span>More</span>
      </div>
    </div>
  )
}


export default TopNavBar;
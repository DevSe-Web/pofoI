import styles from './TopNavBar.module.css';
import sidebar from '../../images/bars-solid.svg';
import { useOnOffStore } from '../../zustand/onoffStore';

const TopNavBar = () => {

  const { status, setStatus } = useOnOffStore();

  return (
    <div className={`${styles.body} ${status && styles.activeSide}`}>

      <ul className={styles.left}>
        {/* 토글 */}
        <li><i className="fa-thin fa-circle"></i></li>
        {/* Skill */}
        <li>Skill</li>
        {/* Current Interest */}
        <li>Interest</li>
        {/* Wish */}
        <li>wish</li>
      </ul>

      {/* Logo - Center */}
      <div className={styles.center}>
        <span className="pofo">pofo</span><span className="I">I</span>
      </div>

      {/* Questioins? */}
      <div className={styles.right}>
        <img src={sidebar} alt="sidebar" width={20} onClick={setStatus} className={styles.sidebar} />
      </div>
    </div>
  )
}


export default TopNavBar;
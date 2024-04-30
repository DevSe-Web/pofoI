import styles from './TopNavBar.module.css';

const TopNavBar = () => {


  return (
    <div className={styles.body}>

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
        <span>More</span>
      </div>
    </div>
  )
}


export default TopNavBar;
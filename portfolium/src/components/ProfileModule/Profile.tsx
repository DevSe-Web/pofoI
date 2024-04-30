import styles from './Profile.module.css';
import profileImage from '../../images/MyProfile_highSchool 복사본.jpg'

const Profile = () => {

  return (
    <>
      <div className={styles.info_container}>
        <div className={styles.info}>
          <img src={profileImage} alt="프로필 사진" width={150} />
          <span>Infomation</span>
          <ul>
            <li>Birth - 2001.12.26</li>
            <li>L</li>
          </ul>
        </div>

        <div className={styles.info}>

        </div>
      </div>

    </>
  )
}

export default Profile;
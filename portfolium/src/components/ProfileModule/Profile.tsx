import styles from './Profile.module.css';
import profileImage from '../../images/MyProfile_highSchool 복사본.jpg';
import instagram from '../../images/instagram.svg';
import mail from '../../images/mail.svg';
import phone_call from '../../images/phone-call.svg';
import birthday from '../../images/user-plus.svg';
import graduation from '../../images/graduation-cap-solid.svg';
import project_star from '../../images/star.svg';
import code from '../../images/code.svg';
import { useState } from 'react';

const Profile = () => {

  const schObj = [
    { lv: '초등학교', name: "범서", status: "DONE" },
    { lv: '중학교', name: "옥현", status: "DONE" },
    { lv: '고등학교', name: "우신", status: "DONE" },
    { lv: '전문대학교', name: "울산", status: "ING" },
    { lv: '대학교', name: "한양", status: "WILL" },
  ]

  const [style, setStyle] = useState('');
  const handleStatus = async (status: String) => {
    switch (status) {
      case "DONE": await setStyle('lightgray'); return <span style={{ color: style }}>{status}</span>;
      case "ING": await setStyle('blue'); return <span style={{ color: style }}>{status}</span>;
      case "WILL": await setStyle('yellow'); return <span style={{ color: style }}>{status}</span>;
      default: await setStyle('NONE'); return <span style={{ color: style }}>{status}</span>;
    }
  }

  return (
    <>
      <div className={styles.info_container}>

        {/* left info */}
        <div className={styles.contact}>
          <img src={profileImage} alt="프로필 사진" width={150} />
          {/* INFORMATION */}
          <span className='list_h2'>INFO</span>
          <ul className={styles.contact_list}>
            {/* ✅Todo : create onClick event */}
            <li><img src={birthday} alt="birthday" width={24} /> <span>2001.12.26</span></li>
            <li><img src={phone_call} alt="phone_call" width={24} /> <span>010-2335-5430</span></li>
            <li><img src={mail} alt="mail" width={24} /> <span>djadjawltjr@gmail.com</span></li>
            <li><img src={instagram} alt="instagram" width={24} /><span>devum01</span></li>
          </ul>
        </div>

        {/* right info - HISTORY */}
        <div className={styles.history}>
          <span className='list_h2'>History log...</span>
          {/* SCHOOL */}
          <div>
            <div className={styles.title_h3}><img src={graduation} alt="graduation" width={24} /><span className='list_h3'>SCHOOL</span></div>
            <ul className={styles.sch_list}>
              {/* WILL 항목을 제외한 배열 맵핑 */}
              {schObj.filter(item => item.status != 'WILL').map(
                (item: any, index: number) => {
                  return (
                    <li key={index}>
                      {/* {handleStatus(item.status && item.status)} */}

                      <span className={styles.sch}>{item.name}{item.lv}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/* SKILL */}
          <div>
            <div className={styles.title_h3}><img src={code} alt="code" width={24} /><span className='list_h3'>SKILL</span></div>
          </div>
          {/* PROJECT */}
          <div>
            <div className={styles.title_h3}><img src={project_star} alt="project_star" width={24} /><span className='list_h3'>PROJECT</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;
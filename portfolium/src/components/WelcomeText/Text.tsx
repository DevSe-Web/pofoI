import React, { useState, useEffect } from 'react';
import styles from './Text.module.css';

// P - Potential (잠재력) <- 왼쪽부터
// O - Opportunity (기회) <- 오른쪽부터
// F - Future (미래) <- 가운데부터
// O - Originality (독창성)
// I - Innovation (혁신)
// portfolio I <- 텍스트가 쳐지고 마지막에 밑죽 뽝!

const Text = () => {
  const [text, setText] = useState('Coder');

  useEffect(() => {
    const textmain = () => {
      setTimeout(() => {
        setText(" Student");
      }, 0);

      setTimeout(() => {
        setText(" Developer");
      }, 3000);

      setTimeout(() => {
        setText(" Publisher");
      }, 6000);
    };

    textmain();
    const interval = setInterval(textmain, 9000);

    return () => clearInterval(interval);
  }, []); // useEffect가 한 번만 실행되도록 빈 배열을 전달합니다.

  return (
    <div className={styles.welcome_animation}>
      <span>Welcome !</span>
      <span>I'm</span>
      <span className={styles.trans_text}>{text}</span>
      <span id="text"></span>
    </div>
  );
}

export default Text;

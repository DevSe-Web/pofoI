import React, { useState, useEffect } from 'react';
import styles from './Text.module.css';

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
    </div>
  );
}

export default Text;

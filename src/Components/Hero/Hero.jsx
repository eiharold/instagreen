import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import stylesBtn from '../Forms/Button.module.css';

const Hero = () => {
  return (
    <div className={`${styles.hero} animeFade`}>
      <h1 className={styles.h1hero}>
        Compartilhe seu amor por plantas e descubra novas espécies com a nossa
        comunidade.
      </h1>
      <Link className={stylesBtn.button} to="/login/criar">
        Entre para a comunidade
      </Link>
    </div>
  );
};

export default Hero;

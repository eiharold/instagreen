import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        instagreen.com.br |{' '}
        <Link
          to="https://eiharold.com"
          target="_blank"
          style={{ color: '#fff' }}
        >
          Desenvolvido por eiHarold!
        </Link>{' '}
        | Direitos reservados © 2023
      </p>
    </footer>
  );
};

export default Footer;

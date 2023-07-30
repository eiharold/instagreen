import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Instagreen } from '../Assets/logo-instagreen.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Instagreen - Home">
          <Instagreen />
        </Link>
        {data ? (
          <Link className={styles.login} to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Entrar | Cadastrar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
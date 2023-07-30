import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Planta');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minhas Plantas');
    }
  }, [location]);

  return (
    <>
      <header className={styles.header}>
        <UserHeaderNav />
      </header>
      <h1 className="title">{title}</h1>
    </>
  );
};

export default UserHeader;

import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Admin from '../Admin/Admin';

const UserHeader = () => {
  const { data } = React.useContext(UserContext);
  const [admin, setAdmin] = React.useState(false);

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

    if (data.id == 11) {
      setAdmin(true);
      setTitle('Painel Administrativo');
    }
  }, [location, admin, data.id]);

  if (!admin) {
    return (
      <>
        <header className={styles.header}>
          <UserHeaderNav />
        </header>
        <h1 className="title">{title}</h1>
      </>
    );
  } else
    return (
      <>
        <h1 className="title" style={{ marginTop: '50px' }}>
          Usuários Ativos
        </h1>
        <Admin />
      </>
    );
};

export default UserHeader;

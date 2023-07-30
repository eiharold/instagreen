import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Admin.module.css';
import stylesBtn from '../Forms/Button.module.css';
import { UserContext } from '../../UserContext';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import UserDelete from './UserDelete';

const Admin = () => {
  const { data } = React.useContext(UserContext);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogoutToLogin() {
    userLogout();
    navigate('/login');
  }

  function downloadCSV(jsonData) {
    const replacer = (key, value) => (value === null ? '' : value);
    const header = Object.keys(jsonData[0]);
    let csv = jsonData.map((row) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(','),
    );
    csv.unshift(header.join(','));
    csv = csv.join('\r\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'usuarios_instagreen.csv';
    link.click();
  }

  function handleDownloadCSV() {
    downloadCSV(
      data.users.filter((user) => user.id != 1).filter((user) => user.id != 11),
    );
  }

  return (
    <div className={`${styles.conteinerUsers} animeLeft`}>
      <ul>
        {data.users
          .filter((user) => user.id != 1)
          .filter((user) => user.id != 11)
          .map((item) => (
            <li className={styles.itemUsers} key={item.id}>
              <Link to={`/perfil/${item.user_login}`}>
                <div className={styles.idusuario}>ID: {item.id}</div>
                <div className={styles.nomeusuario}>{item.user_login}</div>{' '}
                <div className={styles.emailusuario}>{item.user_email}</div>
              </Link>
              <div>
                <Link to={`/perfil/${item.user_login}`}>
                  <div className={styles.btnver}>Ver</div>{' '}
                </Link>
                <div className={styles.btndeletar}>
                  <UserDelete id={item.id} />
                </div>
              </div>
            </li>
          ))}
      </ul>
      <div className={styles.botoes}>
        <button className={styles.button} onClick={handleDownloadCSV}>
          Exportar CSV
        </button>
        <button className={styles.button} onClick={handleLogoutToLogin}>
          <Sair />
          &nbsp;Sair
        </button>
      </div>
    </div>
  );
};

export default Admin;

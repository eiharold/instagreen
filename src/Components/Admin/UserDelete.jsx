import React from 'react';
import { USER_DELETE } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import styles from './UserDelete.module.css';

const UserDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm(
      'Tem certeza que deseja remover esse usuário?',
    );
    if (confirm) {
      const { url, options } = USER_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default UserDelete;

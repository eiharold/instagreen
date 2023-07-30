import React from 'react';
import styles from './UserPhotoPost.module.css';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import { PHOTO_POST } from '../../Api';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const nome = useForm();
  const cientifico = useForm();
  const altura = useForm('number');
  const idade = useForm('number');
  const descricao = useForm();
  const hashtags = useForm();
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('cientifico', cientifico.value);
    formData.append('altura', altura.value);
    formData.append('idade', idade.value);
    formData.append('descricao', descricao.value);
    formData.append('hashtags', hashtags.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua planta" />
      <form onSubmit={handleSubmit}>
        <div className={styles.colunasForm}>
          <div className={styles.colunaForm}>
            <Input label="Nome" type="text" name="nome" {...nome} />
            <Input
              label="Nome científico"
              type="text"
              name="cientifico"
              {...cientifico}
            />
            <Input
              label="Altura (cm)"
              type="number"
              name="altura"
              {...altura}
            />
          </div>
          <div className={styles.colunaForm}>
            <Input label="Idade (anos)" type="number" name="idade" {...idade} />
            <Input
              label="Descrição"
              type="text"
              name="descricao"
              {...descricao}
            />
            <Input label="Hashtags" type="text" name="hashtags" {...hashtags} />

            <input
              className={styles.file}
              type="file"
              name="img"
              id="img"
              onChange={handleImgChange}
            />
            {loading ? (
              <Button disabled>Enviando...</Button>
            ) : (
              <Button>Enviar</Button>
            )}
            <Error error={error} />
          </div>
        </div>
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoPost;

import React from 'react';
import Feed from './Feed/Feed';
import Head from './Helper/Head';
import Hero from './Hero/Hero';
import { UserContext } from '../UserContext';

const Home = () => {
  const { data } = React.useContext(UserContext);
  return (
    <>
      {!data && <Hero />}
      <section className="container mainContainer">
        <Head
          title="A rede social para quem ama plantas."
          description="Instagreen - Compartilhe seu amor por plantas e descubra novas espécies com a nossa comunidade."
        />
        <Feed />
      </section>
    </>
  );
};

export default Home;

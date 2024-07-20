import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos';
import { useEffect, useState } from 'react';
import { buscarLivros } from '../services/livros';
import ErrorPage from './ErrorPage';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Home = () => {
  const [livros, setLivros] = useState([]);
  const [lancamentos, setLancamentos] = useState([]);
  const [recomendacao, setRecomendacao] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await buscarLivros();
      setLivros(response);
      setLancamentos(response.slice(-3));
      setRecomendacao(response[Math.floor(Math.random() * response.length)]);
    } catch (error) {
      console.log('Erro com a conexão do banco de dados');
    }
  };

  return (
    <AppContainer>
      {livros ? (
        <>
          <Pesquisa
            livros={livros}
            titulo="Já sabe por onde começar?"
            subtitulo="Encontre seu livro em nossa estante."
          />
          <UltimosLancamentos
            lancamentos={lancamentos}
            recomendacao={recomendacao}
          />
        </>
      ) : (
        <ErrorPage />
      )}
    </AppContainer>
  );
};

export default Home;

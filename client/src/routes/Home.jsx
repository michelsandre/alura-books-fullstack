import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos';
import { useEffect, useState } from 'react';
import { buscarLivros } from '../services/livros';

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
    const response = await buscarLivros();
    setLivros(response);
    setLancamentos(response.slice(-3));
    setRecomendacao(response[Math.floor(Math.random() * response.length)]);
  };

  return (
    <AppContainer>
      <Pesquisa livros={livros} />
      <UltimosLancamentos lancamentos={lancamentos} recomendacao={recomendacao} />
    </AppContainer>
  );
};

export default Home;

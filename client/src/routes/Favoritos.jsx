import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import { useEffect, useState } from 'react';
import { buscarFavoritos } from '../services/favoritos';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Favoritos = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await buscarFavoritos();
    setLivros(response);
  };

  return (
    <AppContainer>
      <Pesquisa livros={livros} />
    </AppContainer>
  );
};

export default Favoritos;

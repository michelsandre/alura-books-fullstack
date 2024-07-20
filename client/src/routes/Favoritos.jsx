import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import { useEffect, useState } from 'react';
import { buscarFavoritos } from '../services/favoritos';
import ErrorPage from './ErrorPage';

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
      {livros ? (
        <>
          <Pesquisa
            livros={livros}
            titulo="Seus livros favoritos :)"
            subtitulo="Aqui estão seus livros selecionados."
            fetchData={fetchData}
          />
        </>
      ) : (
        <ErrorPage />
      )}
    </AppContainer>
  );
};

export default Favoritos;

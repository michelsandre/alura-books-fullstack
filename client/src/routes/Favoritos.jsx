import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Favoritos = () => {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
};

export default Favoritos;

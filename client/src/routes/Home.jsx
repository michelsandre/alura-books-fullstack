import styled from 'styled-components';
import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Home = () => {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
};

export default Home;

import Header from './components/Header';
import styled from 'styled-components';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';

const AppContainer = styled.div`
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
};

export default App;

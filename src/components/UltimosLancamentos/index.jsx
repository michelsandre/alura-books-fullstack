import styled from 'styled-components';
import { livros } from './dadosUltimosLancamentos';

const LancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Titulo = styled.h2`
  width: 100%;
  padding: 2rem 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 2rem;
  text-align: center;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

const UltimosLancamentos = () => {
  return (
    <LancamentosContainer>
      <Titulo>ULTIMOS LANÇAMENTOS</Titulo>;
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="livro" width="200px" />
        ))}
      </NovosLivrosContainer>
    </LancamentosContainer>
  );
};

export default UltimosLancamentos;

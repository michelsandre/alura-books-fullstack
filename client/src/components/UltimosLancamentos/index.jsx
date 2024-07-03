import styled from 'styled-components';
import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';

import imagemLivro from '../../images/livro2.png';
import CardRecomenda from '../CardRecomenda';

const LancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
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
      <Titulo cor="#eb9b00" tamanhoFonte="2rem">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      ;
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="livro" width="200px" />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
        margem="1rem"
      />
    </LancamentosContainer>
  );
};

export default UltimosLancamentos;

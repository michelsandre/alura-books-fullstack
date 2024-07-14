import styled from 'styled-components';
import { Titulo } from '../Titulo';
import { useState, useEffect } from 'react';

import CardRecomenda from '../CardRecomenda';
import axios from 'axios';

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
  gap: 10px;
`;

const UltimosLancamentos = () => {
  const [lancamentos, setLancamentos] = useState([]);
  const [recomendacao, setRecomendacao] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/livros')
      .then((res) => {
        //Ultimos lancamentos
        setLancamentos(res.data.slice(-3));

        //Recomendação
        const totalLivros = res.data.length;
        setRecomendacao(res.data[Math.floor(Math.random() * totalLivros)]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <LancamentosContainer>
      <Titulo cor="#eb9b00" tamanhofonte="2rem">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      ;
      <NovosLivrosContainer>
        {lancamentos.map((livro, i) => (
          <img
            src={livro.url}
            alt="livro"
            width="200px"
            height="270px"
            key={i}
          />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo={recomendacao.nome}
        descricao={recomendacao.descricao}
        img={recomendacao.url}
        margem="1rem"
      />
    </LancamentosContainer>
  );
};

export default UltimosLancamentos;

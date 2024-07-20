import styled from 'styled-components';
import Input from '../Input';
import { useEffect, useState } from 'react';
import Livro from '../Livro';

//background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
//height: 270px;

const PesquisaContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 3rem 0;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);
`;

const Titulo = styled.h2`
  font-size: 2rem;
`;
const Subtitulo = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const LivrosContainer = styled.div`
  display: flex;
  padding: 0 5rem;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const Pesquisa = ({ livros, titulo, subtitulo, fetchData = null }) => {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  useEffect(() => {
    setLivrosPesquisados(livros);
  }, [livros]);

  const handlePesquisa = (e) => {
    const textoBusca = e.target.value.toLowerCase();

    const resultadoPesquisa = livros.filter((livro) =>
      livro.nome.toLowerCase().includes(textoBusca)
    );

    setLivrosPesquisados(resultadoPesquisa);
  };

  return (
    <PesquisaContainer>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
      <Input
        onChange={handlePesquisa}
        placeholder="Procure pelo título do livro"
      />
      <LivrosContainer>
        {livrosPesquisados.map((livro) => (
          <Livro
            titulo={livro.nome}
            capa={livro.url}
            key={livro.id}
            favorito={livro.favorito}
            autor={livro.autor}
            descricao={livro.descricao}
            id={livro.id}
            fetchData={fetchData}
          />
        ))}
      </LivrosContainer>
    </PesquisaContainer>
  );
};

export default Pesquisa;

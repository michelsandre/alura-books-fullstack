import styled from 'styled-components';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { editarFavorito } from '../../services/favoritos';
import { useState } from 'react';

const LivroContainer = styled.div`
  display: flex;
  color: #fff;
  gap: 1rem;
  padding-right: 10px;
  border-radius: 20px;
  width: 430px;
  background-image: radial-gradient(#002f52, #326589);
`;

const Titulo = styled.p`
  width: 200px;
  text-align: left;

  font-size: ${(props) => props.fontSize};
`;

const Button = styled.button`
  font-size: 20px;
  align-self: start;
  margin-top: 10px;
  border: none;
  background-color: transparent;
  color: #fc7222;
  cursor: pointer;
  transition: color 0.3s, scale 0.3s, rotate 0.3s;

  &:hover {
    color: #fd985e;
    scale: 1.2;
  }

  &:active {
    color: #dd5303;
    scale: 1;
  }

  &:disabled {
    pointer-events: none;
    border: none;
    color: #999999;
  }
`;

const Image = styled.img`
  width: 160px;
  height: 216px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0;
`;

const Livro = ({ id, titulo, capa, favorito, autor, descricao, fetchData }) => {
  const [favIcon, setFavIcon] = useState(favorito);

  const handleFavorito = async () => {
    await editarFavorito(id, !favIcon);
    setFavIcon(!favIcon);
    if (fetchData) fetchData();
  };

  return (
    <LivroContainer>
      <Image src={capa} alt="Livro" />
      <InfoContainer>
        <Titulo>
          <strong>{titulo}</strong>
        </Titulo>
        <Titulo fontSize="14px">{descricao}</Titulo>
        <Titulo fontSize="14px">Autor: {autor}</Titulo>
      </InfoContainer>
      <Button onClick={handleFavorito}>
        {favIcon ? <FaStar /> : <FaRegStar />}
      </Button>
    </LivroContainer>
  );
};

export default Livro;

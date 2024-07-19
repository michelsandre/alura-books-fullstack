import styled from 'styled-components';

const LivroContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  border-radius: 20px;
  width: 250px;
  background-image: radial-gradient(#002f52, #326589);
`;

const Titulo = styled.p`
  min-height: 50px;
`;

const Button = styled.button`
  padding: 10px 0;
  font-size: 1rem;
  min-width: 80px;
  border: 1px solid #eb9b00;
  background-color: transparent;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #eb9b00;
    color: #000;
  }

  &:active {
    background-color: #ffcf70;
    color: #000;
  }

  &:disabled {
    background-color: #777;
    pointer-events: none;
    border: none;
    color: #999999;
  }
`;

const Livro = ({ titulo, capa, favorito }) => {
  return (
    <LivroContainer>
      <Titulo>{titulo}</Titulo>
      <img src={capa} alt="Livro" width="200px" height="270px" />
      <div>
        <Button disabled={favorito}>Favorito</Button>
        <Button disabled={!favorito}>Remover</Button>
      </div>
    </LivroContainer>
  );
};

export default Livro;

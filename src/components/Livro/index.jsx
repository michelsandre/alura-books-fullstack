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
  background-image: linear-gradient(0deg, #fc7222 0%, #000 30%);
`;

const Livro = ({ titulo, capa }) => {
  return (
    <LivroContainer>
      <p>{titulo}</p>
      <img src={capa} alt="Livro" width="200px" height="270px" />
    </LivroContainer>
  );
};

export default Livro;

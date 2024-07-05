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

const Livro = ({ titulo, capa }) => {
  return (
    <LivroContainer>
      <p>{titulo}</p>
      <img src={capa} alt="Livro" width="200px" height="270px" />
    </LivroContainer>
  );
};

export default Livro;
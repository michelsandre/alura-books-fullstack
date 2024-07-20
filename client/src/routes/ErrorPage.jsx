import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  font-size: 18px;
  font-weight: bold;
`;

const ErrorPage = () => {
  return (
    <Container>
      Ops... ocorreu um erro na conexão com o banco de dados.
    </Container>
  );
};

export default ErrorPage;

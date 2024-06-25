import sacola from '../../images/sacola.svg';
import perfil from '../../images/perfil.svg';
import styled from 'styled-components';

const IconesContainer = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconeContainer = styled.li`
  list-style: none;
  cursor: pointer;
`;

const ImgContainer = styled.img`
  width: 40px;
  height: 40px;
`;

const IconesHeader = () => {
  const icones = [sacola, perfil];
  return (
    <IconesContainer>
      {icones.map((icone) => (
        <IconeContainer>
          <ImgContainer src={icone} alt="imagem-icone" />
        </IconeContainer>
      ))}
    </IconesContainer>
  );
};

export default IconesHeader;

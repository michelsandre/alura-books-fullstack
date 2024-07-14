import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const TextLogo = styled.p`
  font-size: 2rem;
  cursor: pointer;
`;

const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoContainer>
      <img src={logo} alt="Logo" width="50px" height="50px" />
      <TextLogo onClick={() => navigate('/')}>
        <strong>Alura</strong>Books
      </TextLogo>
    </LogoContainer>
  );
};

export default Logo;

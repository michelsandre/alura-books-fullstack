import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const TextLogo = styled.p`
  font-size: 2rem;
  margin: 0;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" width="50px" height="50px" />
      <TextLogo>
        <strong>Alura</strong>Books
      </TextLogo>
    </LogoContainer>
  );
};

export default Logo;

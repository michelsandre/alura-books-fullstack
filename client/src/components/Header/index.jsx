import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import MenuHeader from '../MenuHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 0.2rem solid #fc7222;
  padding: 1rem 1.5rem;
`;

const LogoMenuContainer = styled.div`
  display: flex;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoMenuContainer>
        <Logo />
        <MenuHeader />
      </LogoMenuContainer>
      <IconesHeader />
    </HeaderContainer>
  );
};

export default Header;

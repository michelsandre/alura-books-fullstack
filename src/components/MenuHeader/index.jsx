import styled from 'styled-components';

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Opcao = styled.li`
  list-style: none;
  text-transform: uppercase;
  cursor: pointer;
`;

const LinkContainer = styled.a`
  text-decoration: none;
  color: #002f52;

  &:hover {
    color: #fc7222;
  }
`;

const MenuHeader = () => {
  const menuOpcoes = [
    {
      nome: 'Categorias',
      url: '#',
    },
    {
      nome: 'Favoritos',
      url: '#',
    },
    {
      nome: 'Minha estante',
      url: '#',
    },
  ];
  return (
    <MenuContainer>
      {menuOpcoes.map((opcao) => (
        <Opcao>
          <LinkContainer href={opcao.url}>{opcao.nome}</LinkContainer>
        </Opcao>
      ))}
    </MenuContainer>
  );
};

export default MenuHeader;

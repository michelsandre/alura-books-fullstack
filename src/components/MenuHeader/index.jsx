import styled from 'styled-components';

const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
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
  border: 1px solid transparent;
  padding: 5px;
  transition: border 0.4s, color 0.4s;

  &:hover {
    color: #fc7222;
    border: 1px solid #fc7222;
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
        <Opcao key={opcao.nome}>
          <LinkContainer href={opcao.url}>{opcao.nome}</LinkContainer>
        </Opcao>
      ))}
    </MenuContainer>
  );
};

export default MenuHeader;

import styled from 'styled-components';

export const Titulo = styled.h2`
  width: 100%;
  padding: 2rem 0;
  background-color: #fff;
  color: ${(props) => props.cor || '#000'};
  font-size: ${(props) => props.tamanhofonte || '1rem'};
  text-align: ${(props) => props.alinhamento || 'center'};
`;

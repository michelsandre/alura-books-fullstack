import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #fff;
  border-radius: 20px;
  background: transparent;
  padding: 20px 150px;
  width: 500px;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 2rem;

  &::placeholder {
    color: #999;
    font-size: 1rem;
  }

  &:focus {
    outline: none;
    border: 1px solid #fc7222;
  }
`;

export default Input;

import styled from 'styled-components';
import { Titulo } from '../Titulo';

const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: ${(props) => props.margem || '0'} auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 100%;
`;

const Descricao = styled.p`
  max-width: 300px;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgLivro = styled.img`
  width: 160px;
  height: 216px;
`;
const CardRecomenda = ({ titulo, subtitulo, descricao, img, margem }) => {
  return (
    <Card margem={margem || null}>
      <div>
        <Titulo tamanhofonte="16px" cor="#EB9B00" alinhamento="left">
          {titulo}
        </Titulo>
        <Subtitulo>{subtitulo}</Subtitulo>
        <Descricao>{descricao}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} alt="" />
        <Button>Saiba Mais</Button>
      </div>
    </Card>
  );
};

export default CardRecomenda;

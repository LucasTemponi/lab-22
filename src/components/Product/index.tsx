import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor } from "./styles";

export type ProductProps = {
  id: number,
  name: string,
  price: number,
  picture: string,
  stock:number;
};

const Product = ({ id, name, price, picture,stock }: ProductProps) => {
  const priceFormatted = Intl.NumberFormat("pt-BR", {style:'currency',currency:'BRL'}).format(price);
  return(
    <Wrapper>
      <img src={picture} alt={`Imagem de referência ${name}`} />

      <Info>
        <Column>
          <Text>{name}</Text>
          <Text>{priceFormatted}</Text>
        </Column>

        <WrapperIncrementor>
          <Incrementor {...{id,name,picture,price,stock}} />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  )
}

export default Product;

import { Wrapper, Info, Text } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string,
  stock:number;
};

export const EmptyCart = () => (
  
    <Wrapper>
      <Info>
        <Text>Seu carrinho está vazio 🙁</Text>
      </Info>
    </Wrapper>
)

export default EmptyCart;
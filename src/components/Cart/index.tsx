import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";
import Product from "../Product";

import { Wrapper, Subtotal, Header } from "./styles";

import { useCart } from "../../hooks/useCart";


export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * Adicionar itens ao carrinho, design ao seu critério mas deve conter:
 * - Nome do produto
 * - Imagem
 * - Preço
 * - Incrementador
 */

const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {
  const  itemsCarrinho = useCart(state => (state.items));
  const total = useCart(state => (state.precoTotal));


  return(
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size="large" fontWeight={600}>
          Produtos no carrinho
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>
      {itemsCarrinho?.map(element => {
          return <Product {...element}/>
        })}
      <Subtotal>
        <Typography level={5} size="large" fontWeight={600}>
          Total
        </Typography>
        <Typography>{total}</Typography>
      </Subtotal>

      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  )
};

export default MenuPayment;

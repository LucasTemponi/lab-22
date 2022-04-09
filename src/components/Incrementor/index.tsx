import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { InsertEmoticon } from "styled-icons/material-sharp";
import { useCart } from "../../hooks/useCart";
import { ProductProps } from "../Product";


import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
};

const Incrementor = (produto: ProductProps) => {
  const incrementaItem = useCart(state=>state.incrementaItem)
  const decrementaItem = useCart(state=>state.decrementaItem)
  const quantidadeItem = useCart(state=>{
    const item = state.items.find(element=>element.id===produto.id)
    return item?.quantity
  })
  
  return (
      <Wrapper>
      <IconWrapper>
        <SubtractIcon onClick={()=>decrementaItem(produto)} aria-label="Subtract item" />
      </IconWrapper>

      <Quantity>{quantidadeItem ? quantidadeItem : 0 }</Quantity>

      <IconWrapper>
        <PlusIcon onClick={()=>incrementaItem(produto)} aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
)};

export default Incrementor;

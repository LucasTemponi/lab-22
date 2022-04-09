import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";
import { useCart } from "../../hooks/useCart";


import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  id: number;
  quantity: number;
};

const Incrementor = ({ id, quantity }: IncrementorProps) => {
  const incrementaItem = useCart(state=>state.incrementaItem)
  
  return (
      <Wrapper>
      <IconWrapper>
        <SubtractIcon aria-label="Subtract item" />
      </IconWrapper>

      <Quantity>{quantity}</Quantity>

      <IconWrapper>
        <PlusIcon onClick={()=>incrementaItem({id,quantity})} aria-label="Add item" />
      </IconWrapper>
    </Wrapper>
)};

export default Incrementor;

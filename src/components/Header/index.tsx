import { Dispatch, SetStateAction } from "react";
import { ShoppingBagOutline as ShoppingIcon } from "styled-icons/evaicons-outline";
import { useCart } from "../../hooks/useCart";

import { Wrapper } from "./styles";
import { NotificationBadge } from "./styles";

type HeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpen }: HeaderProps) => {
  const badge = useCart(state => state.contaItems);

  return(
    <Wrapper>
      <ShoppingIcon onClick={() => setIsOpen(true)} aria-label="Shopping Icon" />
      { <NotificationBadge>{badge}</NotificationBadge>}
    </Wrapper>
  )
};

export default Header;

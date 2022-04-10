import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    width: 3rem;
  }
`;

export const NotificationBadge = styled.span`
  position: relative;
  top: 1rem;
  right: 1.2rem;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
  background-color: lightgreen;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer`
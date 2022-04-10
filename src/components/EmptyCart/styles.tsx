import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 3.2rem;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightPink};
    border-radius: ${theme.border.radius.other};

    img {
      width: 12.5rem;
      height: 12.5rem;
      border-radius: ${theme.border.radius.other};
    }
  `}
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 3.8rem;

  ${media.lessThan("medium")`
    flex-direction: column;
    margin: 1.6rem;
  `}
`;


export const Text = styled.p`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    font-family: ${theme.font.family.roboto};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.black};
    font-weight: ${theme.font.weight.light};
    margin-top: 0.4rem;

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.medium};
      margin-top: 0;
    `}
  `}
`;
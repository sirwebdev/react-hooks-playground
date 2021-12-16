import styled, { css } from "styled-components";

type TContainerProps = {
  type: "small" | "large";
};

export const Container = styled.h1<TContainerProps>`
  font-size: 2.5rem;
  text-transform: capitalize;

  ${({ type }) =>
    type === "small" &&
    css`
      font-size: 1.5rem;
    `}
`;

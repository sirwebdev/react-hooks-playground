import styled, { css } from "styled-components";
import { IoLogoReact } from "react-icons/io5";

type TContainerProps = {
  currentSize?: "small" | "large";
};

export const Container = styled(IoLogoReact)<TContainerProps>`
  font-size: 5rem;
  color: var(--color-white);

  ${({ currentSize }) =>
    currentSize === "small" &&
    css`
      font-size: 2.5rem;
    `}
`;

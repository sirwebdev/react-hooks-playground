import styled, { css } from "styled-components";

type TContainerProps = {
  visible: boolean;
};

export const Container = styled.button<TContainerProps>`
  position: absolute;

  left: 85px;

  background: var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70px;
  height: 70px;

  border-radius: 50%;

  border: 0;

  transition: all 0.3s;

  &:hover {
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.5);
  }

  &:active {
    cursor: grabbing;
  }

  > b {
    color: var(--color-white);
    text-transform: lowercase;

    font-size: 2rem;
    font-weight: 500;
  }

  ${({ visible }) =>
    !visible &&
    css`
      display: none;
      visibility: hidden;
    `}
`;

import styled from "styled-components";

export const Container = styled.button`
  background: transparent;

  width: 70px;
  height: 70px;
  border-radius: 50%;

  border: 0;

  transition: all 0.2s;

  &:active {
    background: var(--color-primary);
  }

  > b {
    color: var(--color-white);
    text-transform: lowercase;

    font-size: 3rem;
    font-weight: 100;
  }
`;

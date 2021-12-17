import styled from "styled-components";
import { animatedBackground } from "../../../styles/animations";

export const Container = styled.button`
  padding: 10px 20px;
  border-radius: 10px;

  border: 0;

  background: var(--color-secundary);
  border: 2px solid var(--color-secundary);

  transition: all 0.3s;

  animation: ${animatedBackground} 1s infinite alternate;

  b {
    color: var(--color-white);
    font-size: 1.15rem;

    text-transform: capitalize;
  }

  &:hover {
    animation-play-state: paused;
    animation: none;

    background: var(--color-primary);
    border-color: var(--color-white);

    transform: translateY(-2px);
  }
`;

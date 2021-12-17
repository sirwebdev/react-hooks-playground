import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  from {
      background: var(--color-secundary);
      border: 2px solid var(--color-secundary);
  }
  
  to {
      background: var(--color-primary);
      border: 2px solid var(--color-primary);
  }  
`;

export const Container = styled.button`
  padding: 10px 20px;
  border-radius: 10px;

  border: 0;

  background: var(--color-secundary);
  border: 2px solid var(--color-secundary);

  transition: all 0.3s;

  animation: ${backgroundAnimation} 1s infinite alternate;

  b {
    color: var(--color-white);
    font-size: 1.15rem;

    text-transform: capitalize;
  }

  &:hover {
    animation-play-state: paused;
    animation: none;

    background: var(--color-primary);
    background-color: var(--color-secondary);

    transform: translateY(-2px);
  }
`;

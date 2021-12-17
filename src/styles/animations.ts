import { keyframes } from "styled-components";

export const animatedBackground = keyframes`
  from {
      background: var(--color-secundary);
      border: 2px solid var(--color-secundary);
  }
  
  to {
      background: var(--color-primary);
      border: 2px solid var(--color-primary);
  }  
`;

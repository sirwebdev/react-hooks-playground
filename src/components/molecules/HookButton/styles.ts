import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  padding: 10px;

  width: 200px;
  height: 200px;

  border: 2px solid var(--color-secundary);

  border-radius: 10px;
  background: var(--color-secundary);

  transition: all 0.3s;

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-white);
  }

  > b {
    color: var(--color-white);
    font-size: 1.3rem;

    margin-top: 10px;
    word-break: break-all;
  }

  @media (max-width: 700px) {
    width: 170px;
    height: 170px;
  }
`;

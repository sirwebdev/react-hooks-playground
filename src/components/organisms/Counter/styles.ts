import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: fit-content;

  position: relative;

  background: var(--color-secundary);

  padding: 15px;

  border-radius: 50px;

  transition: all 0.3s;

  &:hover {
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.1);
  }
`;

import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
`;

export const ButtonsContainer = styled.footer`
  margin-top: 50px;

  > button + button {
    margin-left: 10px;
  }
`;

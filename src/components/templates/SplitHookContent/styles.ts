import styled from "styled-components";

export const Container = styled.section`
  margin-top: 30px;

  display: flex;
  align-items: center;

  height: calc(100% - 50px);

  > section {
    display: flex;
    flex-direction: column;
    flex: 1;

    align-items: center;
    justify-content: center;
  }
`;

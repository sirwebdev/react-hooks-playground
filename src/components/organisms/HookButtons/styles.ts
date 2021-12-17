import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;

  margin-top: 30px;

  border: 2.5px solid var(--color-secundary);
  padding: 20px 0px 0px 20px;

  border-radius: 10px;

  > button {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

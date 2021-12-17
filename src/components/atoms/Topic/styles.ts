import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  font-size: 1.6rem;

  list-style: none;

  font-weight: 100;
  padding-left: 10px;

  cursor: default;

  & + li {
    margin-top: 10px;
  }

  &:hover {
    color: yellow;
  }

  :before {
    content: "°";

    position: absolute;
    top: 0.6rem;
    left: -5px;
  }
`;

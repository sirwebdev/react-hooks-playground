import styled from "styled-components";

import { IoChevronBackOutline } from "react-icons/io5";

export const Container = styled(IoChevronBackOutline)`
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    transform: translateX(-2px);
  }
`;

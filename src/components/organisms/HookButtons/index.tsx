import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import HookButton, { THookButton } from "../../molecules/HookButton";

import { Container } from "./styles";

type THookButtonsProps = {
  data: THookButton[];
};

const HookButtons: React.FC<THookButtonsProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigateToSelectButtonPageName = useCallback(
    (pageName: string) => {
      navigate(pageName);
    },
    [],
  );

  const HookButtonList = useMemo(() => {
    if (!data.length) return;

    return data.map(buttonData => (
      <HookButton
        key={buttonData.name}
        data={buttonData}
        onClick={() => handleNavigateToSelectButtonPageName(buttonData.name)}
      />
    ));
  }, [data]);

  return <Container>{HookButtonList}</Container>;
};

export default HookButtons;

import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useTopic from "../../../hooks/useTopic";

import HookButton, { THookButton } from "../../molecules/HookButton";

import { Container } from "./styles";

type THookButtonsProps = {
  data: THookButton[];
};

const HookButtons: React.FC<THookButtonsProps> = ({ data }) => {
  const navigate = useNavigate();
  const { handleSelectTopic } = useTopic();

  const handleNavigateToSelectButtonPageName = useCallback(
    (pageName: string) => {
      navigate(pageName);
    },
    [navigate],
  );

  const handleSelectHook = useCallback(
    (topicData: THookButton) => {
      handleNavigateToSelectButtonPageName(topicData.name);
      handleSelectTopic(topicData.topics);
    },
    [handleNavigateToSelectButtonPageName, handleSelectTopic],
  );

  const HookButtonList = useMemo(() => {
    if (!data.length) return;

    return data.map(buttonData => (
      <HookButton
        key={buttonData.name}
        data={buttonData}
        onClick={() => handleSelectHook(buttonData)}
      />
    ));
  }, [data, handleNavigateToSelectButtonPageName]);

  return <Container>{HookButtonList}</Container>;
};

export default HookButtons;

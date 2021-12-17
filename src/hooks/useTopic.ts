import { useContext } from "react";

import { TopicContext, TTopicContextData } from "../contexts/topic";

const useTopic = () => {
  const context = useContext<TTopicContextData>(TopicContext);

  if (!context) throw new Error("Cannot use useTopic, without TopicProvider.");

  return context;
};

export default useTopic;

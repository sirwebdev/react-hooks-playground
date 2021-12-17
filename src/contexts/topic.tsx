import React, { createContext, useCallback, useMemo, useState } from "react";
import { TTopic } from "../components/atoms/Topic";

export type TTopicContextData = {
  selectedTopics: TTopic[];
  handleSelectTopic(data: TTopic[]): void;
};

export const TopicContext = createContext({} as TTopicContextData);

const TopicProvider: React.FC = ({ children }) => {
  const [selectedTopics, setSelectedTopics] = useState<TTopic[]>([]);

  const handleSelectTopic = useCallback((topics: TTopic[]) => {
    setSelectedTopics(topics);
  }, []);

  const value = useMemo((): TTopicContextData => {
    return {
      selectedTopics,
      handleSelectTopic,
    };
  }, [handleSelectTopic, selectedTopics]);

  return (
    <TopicContext.Provider value={value}>{children}</TopicContext.Provider>
  );
};

export default TopicProvider;

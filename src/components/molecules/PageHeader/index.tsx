import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import BackButton from "../../atoms/BackButton";
import Title from "../../atoms/Title";

import { Container } from "./styles";

type PageHeaderProps = {
  title: string;
  navigateTo?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title, navigateTo }) => {
  const navigate = useNavigate();

  const handleGoBack = useCallback(
    () => navigate(navigateTo || "/hooks"),
    [navigate, navigateTo],
  );

  return (
    <Container>
      <BackButton onClick={handleGoBack} />

      <Title value={title} type="small" />
    </Container>
  );
};

export default PageHeader;

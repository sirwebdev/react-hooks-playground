import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Title from "../../components/atoms/Title";
import Button from "../../components/atoms/Button";
import Description from "../../components/atoms/Description";

import { Container, Footer } from "./styles";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToHooksPage = useCallback(
    () => navigate("hooks"),
    [navigate],
  );

  return (
    <Container>
      <Title value="Welcome to react hooks playground." />
      <Description value="Developed by martins20" />

      <Footer>
        <Button text="Start discover" onClick={handleNavigateToHooksPage} />
      </Footer>
    </Container>
  );
};

export default Home;

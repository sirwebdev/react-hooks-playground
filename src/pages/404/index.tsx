import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Title from "../../components/atoms/Title";
import Button from "../../components/atoms/Button";
import Description from "../../components/atoms/Description";

import { Container } from "./styles";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToHomePage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Container>
      <section>
        <Title value="Oops 😣, looks like this page does not exists..." />
        <Description value="Try to go back to the home page 😎" />
      </section>

      <Button text="Home" onClick={handleGoToHomePage} />
    </Container>
  );
};

export default NotFoundPage;

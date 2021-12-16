import React from "react";

import Title from "../../components/atoms/Title";
import Description from "../../components/atoms/Description";
import DefaultPage from "../../components/templates/DefaultPage";

const Home: React.FC = () => {
  return (
    <DefaultPage>
      <Title value="Welcome to react hooks playground" />
      <Description value="Developed by martins20" />
    </DefaultPage>
  );
};

export default Home;

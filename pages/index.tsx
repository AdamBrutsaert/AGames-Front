import type { NextPage } from "next";
import { FormEventHandler } from "react";
import Background from "components/Background";
import IndexFrame from "components/IndexFrame";

const onSubmit = (): FormEventHandler => {
  return (event) => {
    event.preventDefault();
  };
};

const Home: NextPage = () => {
  return (
    <Background className="flex h-full items-center justify-center">
      <IndexFrame button="Créer un lobby" onSubmit={onSubmit()} />
    </Background>
  );
};

export default Home;

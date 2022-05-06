import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEventHandler } from "react";

import Background from "src/components/Background";
import JoinCreateFrame from "../components/JoinCreateFrame";

const onSubmit = (): FormEventHandler => {
  return (event) => {
    event.preventDefault();
  };
};

const Join: NextPage = () => {
  const id = useRouter().query.id!;

  return (
    <Background className="flex flex-col items-center justify-center">
      <JoinCreateFrame
        button="Rejoindre"
        onSubmit={onSubmit()}
        failedConnection={false}
      />
    </Background>
  );
};

export default Join;

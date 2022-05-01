import type { NextPage } from "next";
import { FormEventHandler } from "react";
import { useRouter } from "next/router";
import Background from "components/Background";
import IndexFrame from "components/IndexFrame";

const onSubmit = (): FormEventHandler => {
  return (event) => {
    event.preventDefault();
  };
};

const Join: NextPage = () => {
  const id = useRouter().query.id!;

  return (
    <Background className="flex h-full flex-col items-center justify-center">
      <IndexFrame button="Rejoindre" onSubmit={onSubmit()} />
    </Background>
  );
};

export default Join;

import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Game = dynamic(() => import("components/Game"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-darkGray-700 flex justify-center items-center">
      <div className="border-8 border-darkGray-800">
        <Game />
      </div>
    </div>
  );
};

export default Home;

import { NextPage } from "next";
import Background from "components/Background";
import PlayersList from "components/PlayersList";
import LobbySettings from "components/LobbySettings";

const Lobby: NextPage = () => {
  return (
    <Background className="flex h-full items-center justify-center space-x-36">
      <LobbySettings />
      <PlayersList />
    </Background>
  );
};

export default Lobby;

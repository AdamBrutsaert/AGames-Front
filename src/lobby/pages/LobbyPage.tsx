import { NextPage } from "next";

import Background from "src/components/Background";
import LobbySettings from "../components/LobbySettings";
import PlayersList from "../components/PlayersList";

const LobbyPage: NextPage = () => {
  // TODO: If the socket is not connected, redirect to CreateLobbyPage

  return (
    <Background className="flex items-center justify-center space-x-36">
      <LobbySettings />
      <PlayersList />
    </Background>
  );
};

export default LobbyPage;

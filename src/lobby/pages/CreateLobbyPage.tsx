import type { NextPage } from "next";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Socket } from "socket.io-client";

import Background from "src/components/Background";
import WebsocketContext from "src/websocket/WebsocketContext";
import JoinCreateFrame from "../components/JoinCreateFrame";
import { createLobby } from "../events/createLobby";

const onSubmit = (
  socket: Socket,
  connect: () => Promise<void>,
  setFailedConnection: Dispatch<SetStateAction<boolean>>
): ((event: FormEvent<Element>, pseudo: string, avatar: string) => void) => {
  return async (event, pseudo, avatar) => {
    event.preventDefault();

    try {
      await connect();
      const lobbyInfo = await createLobby(socket, { pseudo, avatar });
      // push it to a lobby context
    } catch {
      setFailedConnection(true);
    }
  };
};

const CreateLobbyPage: NextPage = () => {
  const [failedConnection, setFailedConnection] = useState<boolean>(false);

  const { socket, connect } = useContext(WebsocketContext)!;

  return (
    <Background className="flex items-center justify-center">
      <JoinCreateFrame
        button="Créer un lobby"
        onSubmit={onSubmit(socket, connect, setFailedConnection)}
        failedConnection={failedConnection}
      />
    </Background>
  );
};

export default CreateLobbyPage;

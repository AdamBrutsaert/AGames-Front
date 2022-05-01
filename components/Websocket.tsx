import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import WebsocketContext from "contexts/WebsocketContext";
import io from "socket.io-client";
import { PlayerInfo } from "Utils/Player";

interface WebsocketProps {
  children?: ReactNode;
}

const Websocket: FunctionComponent<WebsocketProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const [lobby, setLobby] = useState<{ new: boolean; id?: string } | undefined>(
    undefined
  );
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo | undefined>(
    undefined
  );

  const createLobby = (player: PlayerInfo) => {
    setSocket(io("http://localhost:3001"));
    setLobby({ new: true });
    setPlayerInfo(player);
  };

  const joinLobby = (lobbyId: string, player: PlayerInfo) => {
    setSocket(io("http://localhost:3001"));
    setLobby({ new: false, id: lobbyId });
    setPlayerInfo(player);
  };

  useEffect(() => {
    if (lobby === undefined) return;
    if (playerInfo === undefined) return;
    if (socket === undefined) return;
    if (!socket.active) return;

    if (lobby.new) {
      socket.emit("lobby:create", playerInfo);
    } else {
      socket.emit("lobby:join", {
        id: lobby.id,
        playerInfo,
      });
    }
  }, [socket, lobby, playerInfo]);

  return (
    <WebsocketContext.Provider value={{ socket, createLobby, joinLobby }}>
      {children}
    </WebsocketContext.Provider>
  );
};

export default Websocket;

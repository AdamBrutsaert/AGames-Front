import { createContext } from "react";
import { Socket } from "socket.io-client";
import { PlayerInfo } from "Utils/Player";

export type WebsocketContextType = {
  socket: Socket | undefined;
  createLobby: (playerInfo: PlayerInfo) => void;
  joinLobby: (lobbyId: string, playerInfo: PlayerInfo) => void;
};

export default createContext<WebsocketContextType>({
  socket: undefined,
  createLobby: (playerInfo: PlayerInfo) => {},
  joinLobby: (lobbyId: string, playerInfo: PlayerInfo) => {},
});

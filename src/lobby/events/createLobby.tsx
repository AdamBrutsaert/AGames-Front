import { Socket } from "socket.io-client";
import { LobbyInfo } from "../utils/LobbyInfo";
import { PlayerInfo } from "../utils/PlayerInfo";

export const createLobby = (socket: Socket, playerInfo: PlayerInfo) => {
  socket.emit("lobby:create", playerInfo);

  return new Promise<LobbyInfo>((resolve, reject) => {
    socket.on("lobby:info", (lobbyInfo: LobbyInfo) => {
      socket.off("lobby:info");
      resolve(lobbyInfo);
    });
  });
};

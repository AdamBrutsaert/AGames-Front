import { PlayerInfo } from "./PlayerInfo";

export type LobbyInfo = {
  id: string;
  players: PlayerInfo[];
  admin: PlayerInfo;
};

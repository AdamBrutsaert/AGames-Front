import { createContext } from "react";
import { Socket } from "socket.io-client";

export type SocketContextType = {
  socket: Socket;
  connect: () => Promise<void>;
};

export default createContext<SocketContextType | undefined>(undefined);

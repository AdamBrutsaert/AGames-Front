import { FunctionComponent, ReactNode } from "react";
import io, { Socket } from "socket.io-client";

import WebsocketContext from "./WebsocketContext";

const connect = (socket: Socket) => {
  return () => {
    socket.connect();

    return new Promise<void>((resolve, reject) => {
      // TODO: Check what socket.active means and maybe use it

      let count = 0;
      const id = setInterval(() => {
        if (count >= 100) {
          clearInterval(id);
          socket.disconnect();
          reject("Failed to connected after 10 seconds.");
        }

        count++;

        if (socket.connected) {
          clearInterval(id);
          resolve();
        }
      }, 100);
    });
  };
};

interface WebsocketProps {
  children?: ReactNode;
}

const Websocket: FunctionComponent<WebsocketProps> = ({ children }) => {
  const socket = io("http://localhost:3001", { autoConnect: false });

  return (
    <WebsocketContext.Provider value={{ socket, connect: connect(socket) }}>
      {children}
    </WebsocketContext.Provider>
  );
};

export default Websocket;

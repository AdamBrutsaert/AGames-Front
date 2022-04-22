import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { ChangeEventHandler, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const Game = dynamic(() => import("components/Game"), { ssr: false });

let socket: Socket | undefined;

const Home: NextPage = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    if (!socket) {
      console.log("Tentative");
      socket = io("http://localhost:3001/");

      socket.on("chat", (msg: string) => {
        setMessages((msgs) => [...msgs, msg]);
      });
    }
  }, []);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput(event.target.value);
  };

  const sendMessage = () => {
    socket?.emit("chat", input);
    setInput("");
  };

  return (
    <div>
      <h1>AGames</h1>
      <input
        placeholder="Enter something..."
        onChange={onChange}
        value={input}
      />
      <button onClick={sendMessage}>Click</button>
      <div>
        {messages.map((msg) => (
          <p>{msg}</p>
        ))}
      </div>
      <Game />
    </div>
  );
};

export default Home;

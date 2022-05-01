import { FunctionComponent } from "react";
import Frame from "./Frame";

interface PlayerProps {
  pseudo: string;
  role: string;
}

const Player: FunctionComponent<PlayerProps> = ({ pseudo, role }) => {
  return (
    <div className="flex">
      <img
        className="h-16 w-16 rounded-full border-2"
        src="/avatar.png"
        alt="Avatar"
      />
      <div className="ml-6 flex flex-grow flex-col justify-center">
        <span className="text-xl font-bold leading-5 text-white">{pseudo}</span>
        <span className="text-white text-opacity-60">{role}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 self-center text-white text-opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
    </div>
  );
};

const PlayersList: FunctionComponent = () => {
  return (
    <Frame className="flex h-80vh w-[448px] flex-col items-center py-6 px-8">
      <h2 className="text-xl font-semibold uppercase tracking-wider text-white">
        • &nbsp;Joueurs&nbsp; •
      </h2>
      <h3 className="mt-1 text-white text-opacity-70">
        4 joueurs &nbsp;•&nbsp; 1 spectateur
      </h3>
      <div className="mt-8 w-full space-y-4 overflow-auto">
        <Player pseudo="Adam" role="Administrateur" />
        <Player pseudo="Mathis" role="Larbin" />
        <Player pseudo="Michel" role="Joueur" />
        <Player pseudo="L'autre michel" role="Joueur" />
      </div>
    </Frame>
  );
};

export default PlayersList;

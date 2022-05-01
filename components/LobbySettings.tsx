import { FunctionComponent } from "react";
import Frame from "./Frame";

// TODO: implement my own scrollbar classes because tailwind-scrollbar lacks of functionnality (rounding, thickness, opacity...)

const LobbySettings: FunctionComponent = () => {
  return (
    <Frame className="flex h-80vh w-[672px] flex-col items-center py-6 px-8">
      <div className="w-full flex-grow">
        <h2 className="text-center text-xl font-semibold uppercase tracking-wider text-white">
          • &nbsp;Paramètres de la partie&nbsp; •
        </h2>
        <div className="mt-8">
          <h3 className="text font-semibold uppercase tracking-wider text-white">
            &gt; Jeu
          </h3>
          <div className="mt-2 w-full space-x-4 overflow-auto whitespace-nowrap pb-4 scrollbar-thin scrollbar-thumb-wine">
            <div className="inline-block h-28 w-56 border-2 border-purple bg-wine" />
            <div className="inline-block h-28 w-56 bg-wine" />
            <div className="inline-block h-28 w-56 bg-wine" />
            <div className="inline-block h-28 w-56 bg-wine" />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text font-semibold uppercase tracking-wider text-white">
            &gt; Mode
          </h3>
          <div className="mt-2 w-full space-x-4 overflow-auto whitespace-nowrap pb-4 scrollbar-thin scrollbar-thumb-wine">
            <div className="inline-block h-28 w-56 border-2 border-purple bg-wine" />
            <div className="inline-block h-28 w-56 bg-wine" />
            <div className="inline-block h-28 w-56 bg-wine" />
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text font-semibold uppercase tracking-wider text-white">
            &gt; Règles
          </h3>
          <p className="mt-2 text-justify leading-5 text-white text-opacity-80">
            Blabla
          </p>
        </div>
      </div>
      <button className="mt-6 self-center rounded bg-crimson py-1 px-2 font-semibold uppercase tracking-wider text-white">
        Lancer la partie
      </button>
    </Frame>
  );
};

export default LobbySettings;

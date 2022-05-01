import { FormEventHandler, FunctionComponent, useState } from "react";
import Frame from "./Frame";

// TODO: Use Next/Image instead of img

interface IndexFrameProps {
  button: string;
  onSubmit: FormEventHandler;
}

const IndexFrame: FunctionComponent<IndexFrameProps> = ({
  button,
  onSubmit,
}) => {
  const [avatar, setAvatar] = useState<string>("/avatar.png");

  return (
    <Frame className="flex divide-x-2 divide-white divide-opacity-10 py-8">
      <div className="flex w-96 flex-col items-center py-2 px-12">
        <img
          src="/logo.png"
          alt="Logo"
          title="Je me demande bien d'où vient l'inspiration de ce nom..."
        />
        <p className="mt-8 text-justify leading-5 text-white text-opacity-80">
          Bienvenue sur <span className="font-semibold">AGames.com</span>, le
          meilleur site de mini jeux en ligne ! Vous pouvez jouer ici à divers
          jeux tel que le pendu ou encore le jeu des carrés... à défaut d'un bon
          nom c'est du fun en perspective sans limites de joueurs et avec un
          profil personnalisé. Bon jeu et merci de votre visite !
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-8 flex w-full flex-grow flex-col"
        >
          <label
            className="text mb-1 block font-bold text-white text-opacity-90"
            htmlFor="username"
          >
            Entrez votre blaze
          </label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            className="mt-2 h-8 w-full rounded border-2 border-white bg-mauve px-2 py-0.5 text-white caret-white outline-none"
          />
          <button className="mt-6 self-center rounded bg-crimson py-1 px-2 font-semibold uppercase tracking-wider text-white">
            {button}
          </button>
        </form>
      </div>
      <div className="flex w-96 flex-col items-center px-12 py-2">
        <img
          className="block h-20 w-20 rounded-full border-2"
          src={avatar}
          alt="avatar"
          title="Mais quel belle personne !"
        />
        <div className="mt-3 flex h-full w-full flex-col">
          <h2 className="text-center font-semibold text-white text-opacity-95">
            Personnalisez votre avatar !
          </h2>
          <div
            className="mt-6 flex w-full flex-grow gap-3 font-semibold"
            title="Un jour cette section viendra..."
          >
            <img
              className={`h-14 w-14 rounded-full border-2  ${
                avatar === "/avatar.png" ? "border-purple" : "border-white"
              }`}
              src="/avatar.png"
              alt="avatar"
              title="Mais quel BG !"
              onClick={() => setAvatar("/avatar.png")}
            />
            <img
              className={`h-14 w-14 rounded-full border-2  ${
                avatar === "/female-avatar.png"
                  ? "border-purple"
                  : "border-white"
              }`}
              src="/female-avatar.png"
              alt="avatar"
              title="Mais quelle BGette !"
              onClick={() => setAvatar("/female-avatar.png")}
            />
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default IndexFrame;

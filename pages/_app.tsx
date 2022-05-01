import "../styles/globals.css";
import type { AppProps } from "next/app";
import Websocket from "components/Websocket";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Websocket>
      <Component {...pageProps} />
    </Websocket>
  );
}

export default MyApp;

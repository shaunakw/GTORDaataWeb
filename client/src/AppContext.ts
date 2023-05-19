import { createContext } from "react";
import { ReadyState } from "react-use-websocket";

interface IAppContext {
  tab: string;
  setTab: (tab: string) => void;
  connectionState: ReadyState;
}

export const AppContext = createContext<IAppContext>({
  tab: "home",
  setTab: () => {},
  connectionState: ReadyState.CLOSED,
});

import { createContext } from "react";
import { InputMode } from "./types";

interface IAppContext {
  ready: boolean;
  tab: string;
  setTab: (tab: string) => void;
  inputMode: InputMode | undefined;
  setInputMode: (inputMode: InputMode | undefined) => void;
  ports: string[];
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

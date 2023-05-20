export type InputMode = {
  name: string;
  path?: string;
};

export type ServerMessage = {
  init?: boolean;
  inputMode?: InputMode;
  ports: string[];
};

export type ClientMessage = {
  inputMode?: InputMode;
};

import { CircularProgress, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { AppContext } from "./AppContext";
import { Home } from "./components/Home";
import { Layouts } from "./components/Layouts";
import { NavBar } from "./components/NavBar";
import { ClientMessage, InputMode, ServerMessage } from "./types";

function App() {
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState("home");
  const [inputMode, setInputMode] = useState<InputMode>();
  const [ports, setPorts] = useState<string[]>([]);

  function onMessage(e: WebSocketEventMap["message"]) {
    const data: ServerMessage = JSON.parse(e.data);
    if (data.init) {
      setInputMode(data.inputMode);
      setReady(true);
    }
    setPorts(data.ports);
    const msg: ClientMessage = { inputMode };
    sendMessage(JSON.stringify(msg));
  }

  const url = "ws://localhost:3001";
  const { sendMessage, readyState } = useWebSocket(url, { onMessage });

  useEffect(() => {
    if (readyState !== ReadyState.OPEN) {
      setReady(false);
    }
  }, [readyState]);

  const tabComponents: Record<string, JSX.Element> = {
    home: <Home />,
    layouts: <Layouts />,
  };

  return (
    <AppContext.Provider
      value={{
        ready,
        tab,
        setTab,
        inputMode,
        setInputMode,
        ports,
      }}
    >
      <Stack height="100vh">
        <NavBar />
        <div style={{ flexGrow: 1, minHeight: 0 }}>
          {ready ? (
            tabComponents[tab]
          ) : (
            <Stack
              height="100%"
              alignItems="center"
              justifyContent="center"
              spacing={4}
            >
              <CircularProgress />
              <p>Connecting to server...</p>
            </Stack>
          )}
        </div>
      </Stack>
    </AppContext.Provider>
  );
}

export default App;

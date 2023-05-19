import { CircularProgress, Stack } from "@mui/material";
import { useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { AppContext } from "./AppContext";
import { Home } from "./components/Home";
import { Layouts } from "./components/Layouts";
import { NavBar } from "./components/NavBar";

function App() {
  const url = "ws://localhost:3001";
  const { sendMessage, lastMessage, readyState } = useWebSocket(url);

  const tabComponents: Record<string, JSX.Element> = {
    home: <Home />,
    layouts: <Layouts />,
  };

  const [tab, setTab] = useState("home");

  return (
    <AppContext.Provider
      value={{
        tab,
        setTab,
        connectionState: readyState,
      }}
    >
      <NavBar />
      {readyState === ReadyState.OPEN ? (
        tabComponents[tab]
      ) : (
        <Stack
          height="100vh"
          alignItems="center"
          justifyContent="center"
          spacing={4}
        >
          <CircularProgress />
          <p>Connecting to server...</p>
        </Stack>
      )}
    </AppContext.Provider>
  );
}

export default App;

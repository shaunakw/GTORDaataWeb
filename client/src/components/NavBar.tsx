import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { ReadyState } from "react-use-websocket";
import { AppContext } from "../AppContext";

export function NavBar() {
  const { setTab, connectionState } = useContext(AppContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" marginRight={3}>
          GTOR Daata
        </Typography>
        <Button color="inherit" sx={{ mr: 1 }} onClick={() => setTab("home")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => setTab("layouts")}>
          Layouts
        </Button>
        <div style={{ flexGrow: 1 }} />
        {connectionState === ReadyState.OPEN && (
          <>
            <Typography variant="button" marginRight={1}>
              Input:
            </Typography>
            <Button color="inherit">COM3</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../AppContext";

export function NavBar() {
  const { ready, setTab, inputMode, setInputMode } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  function setCsvFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
      setInputMode({ name: "CSV", data: "" });
    }
    setAnchorEl(null);
  }

  function setBinFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
      setInputMode({ name: "BIN", data: new Uint8Array() });
    }
    setAnchorEl(null);
  }

  function fakeInputMode() {
    setInputMode({ name: "FAKE" });
    setAnchorEl(null);
  }

  function comInputMode() {
    setInputMode({ name: "COM3" });
    setAnchorEl(null);
  }

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
        {ready && (
          <>
            <Typography variant="button" marginRight={0.5}>
              Input:
            </Typography>
            <Button
              color="inherit"
              sx={{ minWidth: 0 }}
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              {inputMode?.name ?? "None"}
            </Button>
          </>
        )}
      </Toolbar>

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={fakeInputMode}>Fake Data</MenuItem>
        <label>
          <MenuItem>
            CSV File
            <input type="file" hidden onChange={setCsvFile} />
          </MenuItem>
        </label>
        <label>
          <MenuItem>
            Bin File
            <input type="file" hidden onChange={setBinFile} />
          </MenuItem>
        </label>
        <MenuItem onClick={comInputMode}>COM Port</MenuItem>
      </Menu>
    </AppBar>
  );
}

import { Grid, Paper, Stack, Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";

const paperSx = {
  height: "100%",
  borderRadius: 3,
  padding: 2,
  overflowY: "auto",
};

export function Home() {
  const sensors = [];
  for (let i = 0; i < 100; ++i) {
    sensors.push({
      id: i,
      name: `random_sensor_name`,
      connected: Math.random() > 0.5,
    });
  }

  return (
    <Grid
      container
      spacing={3}
      paddingTop={3}
      paddingX={3}
      height="100%"
      boxSizing="border-box"
    >
      <Grid item xs={6} height="100%">
        <Paper sx={paperSx}>
          <Typography variant="h6" marginBottom={1.5}>
            Sensors
          </Typography>
          {sensors.map((sensor) => (
            <Stack direction="row" alignItems="center" key={sensor.id}>
              <div
                style={{
                  display: "inline-block",
                  width: 16,
                  height: 16,
                  margin: "4px 8px 4px 0",
                  borderRadius: "50%",
                  backgroundColor: sensor.connected ? green[500] : red[500],
                }}
              />
              <Typography variant="body2">
                {sensor.id}: {sensor.name}
              </Typography>
            </Stack>
          ))}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={paperSx}>
          <Typography variant="h6" marginBottom={1.5}>
            Status
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

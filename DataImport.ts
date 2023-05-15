import { SerialPort } from "serialport";

class DataImport {
  private inputMode: string = "";
  private serial: SerialPort | undefined;
  private packet: number[] = [];

  constructor() {
    setInterval(this.sendPacket, 100);
  }

  setInputMode(mode: string) {
    this.serial?.close();
    if (mode === "BIN") {
      // TODO
    } else if (mode === "CSV") {
      // TODO
    } else {
      this.serial = new SerialPort({ path: mode, baudRate: 230400 });
      this.serial.on("data", (data) => {
        console.log(data);
      });
    }
    this.inputMode = mode;
  }

  sendPacket() {
    if (this.inputMode.includes("COM")) {
    }
  }
}

export { DataImport };
